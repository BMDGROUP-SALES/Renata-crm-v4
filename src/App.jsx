import { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('admin');
  const [montoVenta, setMontoVenta] = useState('');
  const [comisionPorcentaje, setComisionPorcentaje] = useState(1.2);
  const [comisionCalculada, setComisionCalculada] = useState(0);

  const calcularComision = () => {
    if (montoVenta && !isNaN(montoVenta)) {
      const monto = parseFloat(montoVenta);
      const comision = (monto * comisionPorcentaje) / 100;
      setComisionCalculada(comision);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold">RENATA CRM v4</h1>
          <p className="text-blue-100 mt-2">Sistema de Gestión de Relaciones Comerciales</p>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="bg-slate-800 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-4 flex gap-4">
          <button
            onClick={() => setActiveTab('admin')}
            className={`px-6 py-2 rounded-lg font-semibold transition-all ${
              activeTab === 'admin'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
            }`}
          >
            Panel Admin
          </button>
          <button
            onClick={() => setActiveTab('calculadora')}
            className={`px-6 py-2 rounded-lg font-semibold transition-all ${
              activeTab === 'calculadora'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
            }`}
          >
            Calculadora
          </button>
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`px-6 py-2 rounded-lg font-semibold transition-all ${
              activeTab === 'dashboard'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
            }`}
          >
            Dashboard
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto p-6">
        {/* Panel Admin */}
        {activeTab === 'admin' && (
          <div className="bg-slate-700 rounded-lg p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-white mb-6">Panel Administrativo</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-600 p-6 rounded-lg">
                <p className="text-blue-100 text-sm font-semibold mb-2">Total de Clientes</p>
                <p className="text-4xl font-bold text-white">156</p>
              </div>
              <div className="bg-green-600 p-6 rounded-lg">
                <p className="text-green-100 text-sm font-semibold mb-2">Comisiones Pendientes</p>
                <p className="text-4xl font-bold text-white">$45,230</p>
              </div>
              <div className="bg-purple-600 p-6 rounded-lg">
                <p className="text-purple-100 text-sm font-semibold mb-2">Proyectos Activos</p>
                <p className="text-4xl font-bold text-white">12</p>
              </div>
            </div>
            <div className="mt-8 bg-slate-600 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">Últimas Actividades</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Nueva venta registrada - Edificio Orión
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Comisión pagada - La Joya de Malabrigo
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Proyecto actualizado - Residencial Mochica
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Calculadora */}
        {activeTab === 'calculadora' && (
          <div className="bg-slate-700 rounded-lg p-8 shadow-xl max-w-md">
            <h2 className="text-3xl font-bold text-white mb-8">Calculadora de Comisiones</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-slate-300 font-semibold mb-2">Monto de Venta</label>
                <input
                  type="number"
                  placeholder="Ingrese el monto"
                  value={montoVenta}
                  onChange={(e) => setMontoVenta(e.target.value)}
                  className="w-full bg-slate-600 border border-slate-500 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-slate-300 font-semibold mb-2">Porcentaje de Comisión</label>
                <select
                  value={comisionPorcentaje}
                  onChange={(e) => setComisionPorcentaje(parseFloat(e.target.value))}
                  className="w-full bg-slate-600 border border-slate-500 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500">
                  <option value="1.2">1.2% - Comisión Estándar</option>
                  <option value="0.8">0.8% - Comisión Reducida</option>
                  <option value="3.0">3.0% - Comisión Premium</option>
                </select>
              </div>
              <button
                onClick={calcularComision}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-all">
                Calcular Comisión
              </button>
              <div className="bg-slate-600 p-4 rounded-lg border border-green-500">
                <p className="text-slate-300 text-sm mb-1">Comisión Total:</p>
                <p className="text-3xl font-bold text-green-400">${comisionCalculada.toLocaleString('es-PE', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
              </div>
            </div>
          </div>
        )}

        {/* Dashboard */}
        {activeTab === 'dashboard' && (
          <div className="bg-slate-700 rounded-lg p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-white mb-8">Dashboard de Ventas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-600 p-6 rounded-lg border border-slate-500">
                <h3 className="text-xl font-bold text-white mb-6">Ventas por Proyecto</h3>
                <div className="space-y-4">
                  {[
                    { name: 'Edificio Orión', sales: 2450000, percent: 35 },
                    { name: 'La Joya de Malabrigo', sales: 1800000, percent: 26 },
                    { name: 'Residencial Mochica', sales: 1200000, percent: 17 },
                    { name: 'Laura San Isidro', sales: 900000, percent: 13 },
                  ].map((project) => (
                    <div key={project.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-300 font-semibold">{project.name}</span>
                        <span className="text-white font-bold">${(project.sales / 1000000).toFixed(1)}M</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full"
                          style={{ width: `${project.percent}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-slate-600 p-6 rounded-lg border border-slate-500">
                <h3 className="text-xl font-bold text-white mb-6">Comisiones Estimadas</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-slate-700 rounded-lg">
                    <span className="text-slate-300">Comisión 1.2%</span>
                    <span className="text-green-400 font-bold">$79,560</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-slate-700 rounded-lg">
                    <span className="text-slate-300">Comisión 0.8%</span>
                    <span className="text-blue-400 font-bold">$53,040</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-slate-700 rounded-lg">
                    <span className="text-slate-300">Comisión 3.0%</span>
                    <span className="text-purple-400 font-bold">$198,900</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-green-900 rounded-lg mt-4">
                    <span className="text-green-100 font-bold">Total Estimado</span>
                    <span className="text-green-300 font-bold text-lg">$331,500</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
