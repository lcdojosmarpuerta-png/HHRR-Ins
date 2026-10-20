import { Funcionario } from '../types/rrhh';
import { INITIAL_FUNCIONARIOS } from '../data/mockData';

const STORAGE_KEY = 'sigef_rrhh_mpppa_personal_v1';

export class StorageService {
  static getFuncionarios(): Funcionario[] {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (!data) {
        this.saveFuncionarios(INITIAL_FUNCIONARIOS);
        return INITIAL_FUNCIONARIOS;
      }
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
      this.saveFuncionarios(INITIAL_FUNCIONARIOS);
      return INITIAL_FUNCIONARIOS;
    } catch (e) {
      console.error('Error al leer de localStorage:', e);
      return INITIAL_FUNCIONARIOS;
    }
  }

  static getFuncionarioById(id: string): Funcionario | undefined {
    const list = this.getFuncionarios();
    return list.find(f => f.id === id);
  }

  static saveFuncionarios(list: Funcionario[]): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
      window.dispatchEvent(new Event('sigef_storage_updated'));
    } catch (e) {
      console.error('Error al guardar en localStorage:', e);
    }
  }

  static saveFuncionario(funcionario: Funcionario): void {
    const list = this.getFuncionarios();
    const index = list.findIndex(f => f.id === funcionario.id);
    const updated = {
      ...funcionario,
      fechaUltimaActualizacion: new Date().toISOString().split('T')[0]
    };

    if (index >= 0) {
      list[index] = updated;
    } else {
      list.unshift(updated);
    }
    this.saveFuncionarios(list);
  }

  static deleteFuncionario(id: string): boolean {
    const list = this.getFuncionarios();
    const filtered = list.filter(f => f.id !== id);
    if (filtered.length !== list.length) {
      this.saveFuncionarios(filtered);
      return true;
    }
    return false;
  }

  static resetToDefault(): void {
    this.saveFuncionarios(INITIAL_FUNCIONARIOS);
  }

  static exportToJson(): void {
    const list = this.getFuncionarios();
    const jsonStr = JSON.stringify(list, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    const dateStr = new Date().toISOString().split('T')[0];
    link.href = url;
    link.download = `SIGEF_RRHH_MPPPA_RESPALDO_${dateStr}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  static importFromJson(jsonString: string): { success: boolean; count: number; error?: string } {
    try {
      const parsed = JSON.parse(jsonString);
      if (!Array.isArray(parsed)) {
        return { success: false, count: 0, error: 'El archivo JSON no contiene una lista válida de funcionarios.' };
      }
      // Simple validation for basic fields
      const isValid = parsed.every(item => item && item.id && item.identificacion && item.situacionLaboral);
      if (!isValid) {
        return { success: false, count: 0, error: 'El archivo contiene registros que no cumplen la estructura de SIGEF-RRHH.' };
      }

      this.saveFuncionarios(parsed);
      return { success: true, count: parsed.length };
    } catch (e: any) {
      return { success: false, count: 0, error: e?.message || 'Error al procesar el archivo JSON.' };
    }
  }
}
