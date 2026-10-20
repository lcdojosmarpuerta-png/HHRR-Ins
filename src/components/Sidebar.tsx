import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  UserPlus, 
  Database, 
  FileCheck2, 
  ChevronLeft, 
  ChevronRight,
  Landmark,
  ShieldAlert,
  Info
} from 'lucide-react';

interface SidebarProps {
  activeView: 'dashboard' | 'directorio' | 'captacion' | 'respaldo';
  onViewChange: (view: 'dashboard' | 'directorio' | 'captacion' | 'respaldo') => void;
  totalFuncionarios: number;
  totalCompletos: number;
  totalProximosJubilar: number;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeView,
  onViewChange,
  totalFuncionarios,
  totalCompletos,
  totalProximosJubilar,
  isCollapsed,
  onToggleCollapse
}) => {
  const navItems = [
    {
      id: 'dashboard',
      label: 'Dashboard Estadístico',
      sublabel: 'KPIs e Indicadores',
      icon: LayoutDashboard,
      badge: null
    },
    {
      id: 'directorio',
      label: 'Directorio de Personal',
      sublabel: 'Gestión y Auditoría',
      icon: Users,
      badge: totalFuncionarios
    },
    {
      id: 'captacion',
      label: 'Censo y Captación',
      sublabel: 'Formulario Maestro (7 Fases)',
      icon: UserPlus,
      badge: 'Nuevo'
    },
    {
      id: 'respaldo',
      label: 'Respaldo y Datos',
      sublabel: 'Exportar / Importar JSON',
      icon: Database,
      badge: null
    }
  ] as const;

  return (
    <aside 
      className={`bg-slate-900 border-r border-slate-800 flex flex-col transition-all duration-200 no-print ${
        isCollapsed ? 'w-20' : 'w-64'
      }`}
    >
      {/* Ministry Sub-header / Seal Banner */}
      <div className="p-4 border-b border-slate-800 flex items-center justify-between">
        {!isCollapsed && (
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded bg-blue-900/60 border border-blue-700/60 flex items-center justify-center text-blue-300">
              <Landmark className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="text-[11px] font-bold text-slate-200 truncate uppercase">
                MPPPA · DGRRHH
              </div>
              <div className="text-[10px] text-slate-400 truncate">
                República Bolivariana
              </div>
            </div>
          </div>
        )}
        <button
          onClick={onToggleCollapse}
          className="p-1.5 rounded-md text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors mx-auto"
          title={isCollapsed ? 'Expandir barra lateral' : 'Colapsar barra lateral'}
        >
          {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>
      </div>

      {/* Main Navigation */}
      <nav className="p-3 space-y-1.5 flex-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors group relative ${
                isActive
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <Icon className={`w-5 h-5 shrink-0 ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'}`} />
              
              {!isCollapsed && (
                <div className="flex-1 text-left min-w-0">
                  <div className="truncate leading-tight">{item.label}</div>
                  <div className={`text-[10px] truncate ${isActive ? 'text-blue-100' : 'text-slate-400'}`}>
                    {item.sublabel}
                  </div>
                </div>
              )}

              {!isCollapsed && item.badge !== null && (
                <span className={`text-[11px] px-2 py-0.5 rounded-full font-mono tabular-nums ${
                  isActive 
                    ? 'bg-blue-700 text-white' 
                    : item.badge === 'Nuevo' 
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                      : 'bg-slate-800 text-slate-300'
                }`}>
                  {item.badge}
                </span>
              )}

              {/* Tooltip on collapse */}
              {isCollapsed && (
                <div className="absolute left-full ml-2 px-2.5 py-1 bg-slate-800 text-slate-200 text-xs rounded-md shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
                  {item.label}
                </div>
              )}
            </button>
          );
        })}
      </nav>

      {/* System Status Summary Widget */}
      {!isCollapsed && (
        <div className="p-3.5 m-3 rounded-lg bg-slate-850 border border-slate-800 text-slate-300">
          <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center justify-between">
            <span>RESUMEN DE CENSO</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          </div>

          <div className="space-y-1.5 text-xs">
            <div className="flex justify-between items-center">
              <span className="text-slate-400">Total en Plantilla:</span>
              <span className="font-mono tabular-nums font-semibold text-slate-100">{totalFuncionarios}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-400">Expedientes 100%:</span>
              <span className="font-mono tabular-nums text-emerald-400 font-semibold">{totalCompletos}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-400">Próximos a Jubilar:</span>
              <span className="font-mono tabular-nums text-amber-400 font-semibold">{totalProximosJubilar}</span>
            </div>
          </div>

          <div className="mt-3 pt-2.5 border-t border-slate-800 text-[10px] text-slate-400 leading-normal flex items-start gap-1.5">
            <Info className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
            <span>Base sincronizada localmente con respaldo digital.</span>
          </div>
        </div>
      )}

      {/* Footer info */}
      <div className="p-3 border-t border-slate-800 text-[10px] text-slate-400 text-center">
        {!isCollapsed ? (
          <div>
            <span>SIGEF-RRHH v3.4 · MPPPA</span>
            <div className="text-slate-400">Gaceta Oficial APN</div>
          </div>
        ) : (
          <span className="font-mono text-slate-400">v3.4</span>
        )}
      </div>
    </aside>
  );
};
