// app/admin/leads/page.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  FiSearch,
  FiFilter,
  FiEye,
  FiUsers,
  FiX,
  FiChevronDown,
  FiRefreshCw,
  FiAlertCircle,
  FiChevronLeft,
  FiChevronRight,
  FiDownload
} from 'react-icons/fi';

type LeadStatus = 'new' | 'contacted' | 'in-progress' | 'converted' | 'lost' | 'pending';

interface Lead {
  id: string | number;
  name: string;
  email: string;
  phone: string;
  services: string;
  message: string;
  status: LeadStatus;
  source: 'contact' | 'estimate';
  created_at: string;
  updated_at: string;
}

export default function AdminLeadsPage() {
  const [allLeads, setAllLeads] = useState<Lead[]>([]);
  const [filteredLeads, setFilteredLeads] = useState<Lead[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sourceFilter, setSourceFilter] = useState<'all' | 'contact' | 'estimate'>('all');
  const [statusFilter, setStatusFilter] = useState<LeadStatus | 'all'>('all');
  const [showFilters, setShowFilters] = useState(false);

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // API Configuration
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.corporatekaryalay.com/api';

  // --- Fetch Data ---
  const fetchAllLeads = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const [contactsRes, estimatesRes] = await Promise.all([
        fetch(`${API_BASE_URL}/contacts`),
        fetch(`${API_BASE_URL}/estimates`)
      ]);

      if (!contactsRes.ok || !estimatesRes.ok) {
        throw new Error('Failed to fetch leads from one or both sources.');
      }

      const contactsData = await contactsRes.json();
      const estimatesData = await estimatesRes.json();

      const contacts: Lead[] = (contactsData.data || []).map((item: any) => ({
        ...item,
        source: 'contact' as const,
        status: item.status || 'new',
        created_at: item.created_at,
        updated_at: item.updated_at,
      }));

      const estimates: Lead[] = (estimatesData.data || []).map((item: any) => ({
        ...item,
        source: 'estimate' as const,
        status: item.status || 'pending',
        created_at: item.created_at,
        updated_at: item.updated_at,
      }));

      const combined = [...contacts, ...estimates].sort(
        (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );

      setAllLeads(combined);
      setFilteredLeads(combined);
      setCurrentPage(1);
    } catch (err) {
      console.error('Error fetching leads:', err);
      setError(err instanceof Error ? err.message : 'Failed to load leads.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAllLeads();
  }, []);

  // --- Filter Logic ---
  useEffect(() => {
    let filtered = allLeads;

    if (sourceFilter !== 'all') {
      filtered = filtered.filter(lead => lead.source === sourceFilter);
    }

    if (statusFilter !== 'all') {
      filtered = filtered.filter(lead => lead.status === statusFilter);
    }

    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(lead =>
        lead.name.toLowerCase().includes(term) ||
        lead.email.toLowerCase().includes(term) ||
        lead.phone.includes(term) ||
        lead.services.toLowerCase().includes(term)
      );
    }

    setFilteredLeads(filtered);
    setCurrentPage(1);
  }, [allLeads, searchTerm, sourceFilter, statusFilter]);

  // --- Pagination Logic ---
  const totalItems = filteredLeads.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredLeads.slice(startIndex, endIndex);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const goToPreviousPage = () => goToPage(currentPage - 1);
  const goToNextPage = () => goToPage(currentPage + 1);

  const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  // --- CSV Export Function ---
  const exportToCSV = () => {
    if (filteredLeads.length === 0) {
      alert('No leads to export.');
      return;
    }

    // Define CSV headers
    const headers = [
      'ID',
      'Name',
      'Email',
      'Phone',
      'Service',
      'Source',
      'Status',
      'Message',
      'Created At',
      'Updated At'
    ];

    // Prepare data rows
    const rows = filteredLeads.map((lead) => [
      lead.id,
      `"${lead.name}"`,
      `"${lead.email}"`,
      `"${lead.phone}"`,
      `"${lead.services}"`,
      lead.source,
      lead.status,
      `"${lead.message?.replace(/"/g, '""') || ''}"`, // Escape quotes in message
      lead.created_at,
      lead.updated_at
    ]);

    // Combine headers and rows
    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.join(','))
    ].join('\n');

    // Create and download the file
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `leads_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // --- UI Helpers ---
  const getSourceBadge = (source: 'contact' | 'estimate') => {
    return source === 'contact'
      ? 'bg-blue-100 text-blue-700 border-blue-200'
      : 'bg-purple-100 text-purple-700 border-purple-200';
  };

  const getStatusBadge = (status: LeadStatus) => {
    const styles: Record<string, string> = {
      new: 'bg-green-100 text-green-700',
      contacted: 'bg-yellow-100 text-yellow-700',
      'in-progress': 'bg-orange-100 text-orange-700',
      converted: 'bg-emerald-100 text-emerald-700',
      lost: 'bg-red-100 text-red-700',
      pending: 'bg-gray-100 text-gray-700',
    };
    return styles[status] || 'bg-gray-100 text-gray-700';
  };

  const getStatusDot = (status: LeadStatus) => {
    const colors: Record<string, string> = {
      new: 'bg-green-500',
      contacted: 'bg-yellow-500',
      'in-progress': 'bg-orange-500',
      converted: 'bg-emerald-500',
      lost: 'bg-red-500',
      pending: 'bg-gray-400',
    };
    return colors[status] || 'bg-gray-400';
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSourceFilter('all');
    setStatusFilter('all');
    setShowFilters(false);
  };

  // --- Loading State ---
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-gold-500 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-gray-500 mt-4 text-sm">Loading leads...</p>
        </div>
      </div>
    );
  }

  // --- Error State ---
  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <FiAlertCircle className="w-8 h-8 text-red-500" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Error Loading Data</h3>
          <p className="text-sm text-gray-500 mb-4">{error}</p>
          <button
            onClick={fetchAllLeads}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500 text-primary-900 rounded-lg font-medium hover:bg-gold-600 transition"
          >
            <FiRefreshCw className="w-4 h-4" />
            Retry
          </button>
        </div>
      </div>
    );
  }

  // --- Main Render ---
  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-display font-bold text-primary-900">All Leads</h1>
          <p className="text-sm text-gray-500">
            View and manage leads from Contact forms and Estimate requests
          </p>
        </div>
        <div className="flex items-center gap-3">
          {/* Export CSV Button */}
          <button
            onClick={exportToCSV}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition text-sm shadow-sm hover:shadow-md"
            title="Export all leads to CSV"
          >
            <FiDownload className="w-4 h-4" />
            Export CSV
          </button>
          <button
            onClick={fetchAllLeads}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition text-sm"
          >
            <FiRefreshCw className="w-4 h-4" />
            Refresh
          </button>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="bg-white rounded-2xl p-4 shadow-soft border border-gray-100">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex-1 min-w-[180px] relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search by name, email, phone..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 outline-none transition text-sm"
            />
          </div>

          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-xl hover:bg-gray-50 transition text-sm"
          >
            <FiFilter className="w-4 h-4" />
            Filters
            <FiChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
          </button>

          {(searchTerm || sourceFilter !== 'all' || statusFilter !== 'all') && (
            <button
              onClick={clearFilters}
              className="flex items-center gap-1 px-3 py-2 text-sm text-gray-500 hover:text-gray-700 transition"
            >
              <FiX className="w-4 h-4" />
              Clear
            </button>
          )}

          <span className="text-sm text-gray-400 ml-auto">
            {totalItems} {totalItems === 1 ? 'lead' : 'leads'} found
          </span>
        </div>

        {/* Expanded Filter Options */}
        {showFilters && (
          <div className="mt-3 pt-3 border-t border-gray-100 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-gray-500">Source:</span>
              {['all', 'contact', 'estimate'].map((source) => (
                <button
                  key={source}
                  onClick={() => setSourceFilter(source as typeof sourceFilter)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition ${
                    sourceFilter === source
                      ? 'bg-gold-500 text-primary-900'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {source === 'all' ? 'All' : source.charAt(0).toUpperCase() + source.slice(1)}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-gray-500">Status:</span>
              {['all', 'new', 'contacted', 'in-progress', 'converted', 'lost', 'pending'].map((status) => (
                <button
                  key={status}
                  onClick={() => setStatusFilter(status as typeof statusFilter)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition ${
                    statusFilter === status
                      ? 'bg-gold-500 text-primary-900'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {status === 'all' ? 'All' : status.charAt(0).toUpperCase() + status.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Leads Table */}
      <div className="bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lead</th>
                <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Source</th>
                <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {currentItems.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-5 py-12 text-center">
                    <div className="flex flex-col items-center">
                      <FiUsers className="w-12 h-12 text-gray-300 mb-3" />
                      <p className="text-gray-500 font-medium">No leads found</p>
                      <p className="text-sm text-gray-400">Try adjusting your search or filters.</p>
                    </div>
                  </td>
                </tr>
              ) : (
                currentItems.map((lead) => (
                  <tr key={`${lead.source}-${lead.id}`} className="hover:bg-gray-50 transition">
                    <td className="px-5 py-3.5">
                      <div>
                        <p className="font-medium text-primary-900 text-sm">{lead.name}</p>
                        <p className="text-xs text-gray-500">{lead.email}</p>
                      </div>
                    </td>
                    <td className="px-5 py-3.5 text-sm text-gray-600">
                      <span className="font-mono text-xs">{lead.phone}</span>
                    </td>
                    <td className="px-5 py-3.5 text-sm text-gray-600 max-w-[150px] truncate" title={lead.services}>
                      {lead.services}
                    </td>
                    <td className="px-5 py-3.5">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${getSourceBadge(lead.source)}`}>
                        {lead.source.charAt(0).toUpperCase() + lead.source.slice(1)}
                      </span>
                    </td>
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full ${getStatusDot(lead.status)}`} />
                        <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${getStatusBadge(lead.status)}`}>
                          {lead.status.charAt(0).toUpperCase() + lead.status.slice(1)}
                        </span>
                      </div>
                    </td>
                    <td className="px-5 py-3.5 text-sm text-gray-500">
                      {new Date(lead.created_at).toLocaleDateString('en-IN', {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </td>
                    <td className="px-5 py-3.5">
                      <Link
                        href={`/admin/leads/${lead.source}/${lead.id}`}
                        className="inline-flex items-center gap-1 text-sm text-gold-600 hover:text-gold-700 font-medium"
                      >
                        <FiEye className="w-4 h-4" />
                        View
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        {totalItems > 0 && (
          <div className="px-5 py-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>Show</span>
              <select
                value={itemsPerPage}
                onChange={handleItemsPerPageChange}
                className="border border-gray-200 rounded-lg px-2 py-1 focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 outline-none transition"
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>
              <span>per page</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-500">
                Showing {startIndex + 1} to {Math.min(endIndex, totalItems)} of {totalItems} leads
              </span>

              <div className="flex items-center gap-1">
                <button
                  onClick={goToPreviousPage}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <FiChevronLeft className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-1">
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    let pageNum: number;
                    if (totalPages <= 5) {
                      pageNum = i + 1;
                    } else if (currentPage <= 3) {
                      pageNum = i + 1;
                    } else if (currentPage >= totalPages - 2) {
                      pageNum = totalPages - 4 + i;
                    } else {
                      pageNum = currentPage - 2 + i;
                    }
                    return (
                      <button
                        key={pageNum}
                        onClick={() => goToPage(pageNum)}
                        className={`w-8 h-8 rounded-lg text-sm font-medium transition ${
                          currentPage === pageNum
                            ? 'bg-gold-500 text-primary-900'
                            : 'hover:bg-gray-100 text-gray-600'
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                </div>

                <button
                  onClick={goToNextPage}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <FiChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}