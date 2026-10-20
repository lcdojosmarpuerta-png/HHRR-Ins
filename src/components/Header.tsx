import React, { useState } from 'react';
import { Search, UserPlus, Shield, UserCheck, X } from 'lucide-react';
import { Funcionario } from '../types/rrhh';

interface HeaderProps {
  onNewRegistro: () => void;
  onSelectFuncionario: (f: Funcionario) => void;
  funcionarios: Funcionario[];
  activeView: string;
}

export const Header: React.FC<HeaderProps> = ({
  onNewRegistro,
  onSelectFuncionario,
  funcionarios,
  activeView
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  // Search results
  const results = searchTerm.trim().length >= 2
    ? funcionarios.filter(f => {
        const term = searchTerm.toLowerCase();
        const cedulaLimpia = f.identificacion.cedula.replace(/\D/g, '');
        const termLimpio = term.replace(/\D/g, '');
        const matchCedula = termLimpio && cedulaLimpia.includes(termLimpio);
        const matchNombre = `${f.identificacion.nombres} ${f.identificacion.apellidos}`.toLowerCase().includes(term);
        const matchCargo = f.situacionLaboral.cargoNominal.toLowerCase().includes(term);
        return matchCedula || matchNombre || matchCargo;
      }).slice(0, 5)
    : [];

  return (
    <header className="sticky top-0 z-30 bg-slate-900 border-b border-slate-800 text-white shadow-sm no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-16">
          
          {/* Zone 1: Institutional Brand */}
          <div className="flex items-center gap-3 shrink-0">
            {/* SVG Official Ministry Seal */}
            <div className="w-10 h-10 rounded-lg bg-blue-800/80 border border-blue-600/50 flex items-center justify-center p-1.5 shadow-inner">
              <svg viewBox="0 0 48 48" fill="none" className="w-full h-full text-amber-400">
                <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2" strokeDasharray="3 2" />
                <path d="M24 10V34M16 26C16 30 20 34 24 34C28 34 32 30 32 26" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="24" cy="10" r="3" fill="currentColor" />
                <path d="M18 16H30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M12 28C14 26 16 26 18 28C20 30 22 30 24 28C26 26 28 26 30 28C32 30 34 30 36 28" stroke="#38BDF8" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                <span>MPPPA · RECURSOS HUMANOS</span>
              </div>
              <div className="text-base font-bold text-slate-100 tracking-tight leading-tight flex items-center gap-2">
                <span>SIGEF-RRHH</span>
                <span className="text-[11px] font-medium px-1.5 py-0.5 rounded bg-blue-900/80 text-blue-300 border border-blue-700/60">
                  Censo Digital
                </span>
              </div>
            </div>
          </div>

          {/* Zone 2: Global Search Bar */}
          <div className="relative flex-1 max-w-lg mx-2 hidden sm:block">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => setIsSearching(true)}
                placeholder="Búsqueda rápida por Cédula, Nombres o Cargo..."
                className="w-full pl-9 pr-9 py-1.5 text-sm bg-slate-800/90 text-slate-100 placeholder-slate-400 rounded-lg border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-200"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Dropdown search results */}
            {isSearching && searchTerm.trim().length >= 2 && (
              <div 
                className="absolute left-0 right-0 mt-1.5 bg-slate-800 border border-slate-700 rounded-lg shadow-xl overflow-hidden z-50 text-slate-200"
                onMouseLeave={() => setIsSearching(false)}
              >
                <div className="px-3 py-1.5 text-[11px] font-semibold text-slate-400 bg-slate-850 border-b border-slate-700 flex justify-between">
                  <span>RESULTADOS DE BÚSQUEDA ({results.length})</span>
                  <span>Presiona un funcionario para ver su ficha</span>
                </div>
                {results.length > 0 ? (
                  <div className="divide-y divide-slate-700/60 max-h-64 overflow-y-auto">
                    {results.map((f) => (
                      <button
                        key={f.id}
                        type="button"
                        onClick={() => {
                          onSelectFuncionario(f);
                          setIsSearching(false);
                          setSearchTerm('');
                        }}
                        className="w-full text-left px-3 py-2 hover:bg-slate-700/60 flex items-center gap-3 transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-600 shrink-0 border border-slate-500">
                          {f.identificacion.fotoUrl ? (
                            <img src={f.identificacion.fotoUrl} alt={f.identificacion.nombres} className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-xs font-bold text-slate-300">
                              {f.identificacion.nombres.charAt(0)}
                            </div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-bold text-slate-100 group-hover:text-blue-400 truncate flex items-center gap-2">
                            <span>{f.identificacion.nombres} {f.identificacion.apellidos}</span>
                            <span className="font-mono text-[11px] text-slate-400 font-normal">
                              C.I. {f.identificacion.tipoCedula}-{f.identificacion.cedula}
                            </span>
                          </div>
                          <div className="text-[11px] text-slate-400 truncate">
                            {f.situacionLaboral.cargoNominal} · {f.situacionLaboral.sedeRegion}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="p-4 text-center text-xs text-slate-400">
                    No se encontraron funcionarios con el criterio ingresado.
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Zone 3: Primary Action & User Profile */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onNewRegistro}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-lg shadow-sm transition-colors whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <UserPlus className="w-4 h-4" />
              <span>Nuevo Registro</span>
            </button>

            <div className="h-6 w-px bg-slate-700 mx-1 hidden sm:block" />

            {/* User Profile */}
            <div className="flex items-center gap-2.5 pl-1">
              <div className="w-8 h-8 rounded-full bg-slate-700 border border-slate-600 flex items-center justify-center text-amber-400 font-bold text-xs shadow-sm">
                JP
              </div>
              <div className="hidden lg:block text-left">
                <div className="text-xs font-semibold text-slate-200 leading-tight">
                  Lcdo. Josmar Puerta
                </div>
                <div className="text-[10px] text-slate-400 leading-tight">
                  Director General de RRHH
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};
