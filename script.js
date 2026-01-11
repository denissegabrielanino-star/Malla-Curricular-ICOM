// 1. Datos de la Malla
const malla = [
    { id: 'fund_eco', name: 'Fundamentos de la Economía', sem: 1, cat: 'Formación Disciplinaria', reqs: [] },
    { id: 'mat_gest', name: 'Matemática para la Gestión', sem: 1, cat: 'Formación Disciplinaria', reqs: [] },
    { id: 'sost_emp', name: 'Sostenibilidad Empresarial', sem: 1, cat: 'Formación Profesional', reqs: [] },
    { id: 'tec_neg_1', name: 'Tecnología para los Negocios I', sem: 1, cat: 'Formación Profesional', reqs: [] },
    { id: 'antrop', name: 'Antropología', sem: 1, cat: 'Formación e Identidad', reqs: [] },
    
    { id: 'algebra', name: 'Álgebra', sem: 2, cat: 'Formación Disciplinaria', reqs: ['mat_gest'] },
    { id: 'micro_1', name: 'Microeconomía I', sem: 2, cat: 'Formación Disciplinaria', reqs: ['fund_eco'] },
    { id: 'fund_mkt', name: 'Fundamentos de Marketing', sem: 2, cat: 'Formación Profesional', reqs: [] },
    { id: 'fund_cont', name: 'Fundamentos de Contabilidad', sem: 2, cat: 'Formación Profesional', reqs: [] },
    { id: 'tec_neg_2', name: 'Tecnología para los Negocios II', sem: 2, cat: 'Formación Profesional', reqs: [] },
    { id: 'gest_est', name: 'Gestión Estratégica', sem: 2, cat: 'Formación Profesional', reqs: [] },
    
    { id: 'macro_1', name: 'Macroeconomía', sem: 3, cat: 'Formación Disciplinaria', reqs: ['fund_eco'] },
    { id: 'calc_gest', name: 'Cálculo Aplicado a la Gestión', sem: 3, cat: 'Formación Disciplinaria', reqs: ['algebra'] },
    { id: 'mkt_dig', name: 'Marketing Digital', sem: 3, cat: 'Formación Profesional', reqs: ['fund_mkt'] },
    { id: 'cont_ger', name: 'Contabilidad Gerencial', sem: 3, cat: 'Formación Profesional', reqs: ['fund_cont'] },
    { id: 'bus_ana', name: 'Business Analytics', sem: 3, cat: 'Formación Profesional', reqs: ['tec_neg_2'] },
    { id: 'etica', name: 'Ética', sem: 3, cat: 'Formación e Identidad', reqs: ['antrop'] },

    { id: 'prob_est', name: 'Probabilidad y Estadística', sem: 4, cat: 'Formación Disciplinaria', reqs: ['mat_gest'] },
    { id: 'macro_4', name: 'Macroeconomía (S4)', sem: 4, cat: 'Formación Disciplinaria', reqs: ['fund_eco'] },
    { id: 'merc_lab', name: 'Mercado Laboral y Gestión de Personas', sem: 4, cat: 'Formación Profesional', reqs: [] },
    { id: 'finanzas', name: 'Finanzas', sem: 4, cat: 'Formación Profesional', reqs: ['cont_ger'] },
    { id: 'gest_pers', name: 'Gestión Personal y Habilidades', sem: 4, cat: 'Gestión y Empleabilidad', reqs: [] },

    { id: 'hito_1', name: 'Hito Evaluativo Integrativo', sem: 4.5, cat: 'Hito', reqs: ['SEM_2', 'SEM_3'] },

    { id: 'micro_2', name: 'Microeconomía II', sem: 5, cat: 'Formación Disciplinaria', reqs: ['micro_1'] },
    { id: 'est_avan', name: 'Estadística Avanzada', sem: 5, cat: 'Formación Disciplinaria', reqs: ['prob_est'] },
    { id: 'fin_ger', name: 'Finanzas Gerenciales', sem: 5, cat: 'Formación Profesional', reqs: ['finanzas'] },
    { id: 'big_data', name: 'Big Data Analytics', sem: 5, cat: 'Formación Profesional', reqs: ['bus_ana'] },
    { id: 'int_merc', name: 'Inteligencia de Mercado', sem: 5, cat: 'Formación Profesional', reqs: ['fund_mkt'] },
    { id: 'pers_soc', name: 'Persona y Sociedad', sem: 5, cat: 'Formación e Identidad', reqs: ['etica'] },

    { id: 'pol_macro', name: 'Política Macroeconómica', sem: 6, cat: 'Formación Disciplinaria', reqs: ['macro_1'] },
    { id: 'lid_eq', name: 'Taller de Liderazgo y Equipo', sem: 6, cat: 'Formación Profesional', reqs: [] },
    { id: 'econometria', name: 'Econometría', sem: 6, cat: 'Formación Profesional', reqs: ['calc_gest', 'est_avan'] },
    { id: 'ger_sost', name: 'Gerencia Estratégica y Sostenibilidad', sem: 6, cat: 'Formación Profesional', reqs: [] },
    { id: 'leg_emp', name: 'Legislación para el Emprendimiento', sem: 6, cat: 'Formación Profesional', reqs: [] },
    { id: 'elec_1_id', name: 'Electivo I: Formación e Identidad', sem: 6, cat: 'Formación e Identidad', reqs: [] },

    { id: 'alianzas', name: 'Alianzas Público-Privadas', sem: 7, cat: 'Formación Profesional', reqs: [] },
    { id: 'tall_inn', name: 'Taller de Innovación', sem: 7, cat: 'Formación Profesional', reqs: ['SEM_1', 'SEM_2', 'SEM_3', 'SEM_4', 'SEM_5', 'SEM_6'] },
    { id: 'data_sci', name: 'Data Science', sem: 7, cat: 'Formación Profesional', reqs: ['big_data'] },
    { id: 'eval_proy', name: 'Formulación y Evaluación de Proyectos', sem: 7, cat: 'Formación Profesional', reqs: ['fin_ger'] },
    { id: 'elec_2_id', name: 'Electivo II: Formación e Identidad', sem: 7, cat: 'Formación e Identidad', reqs: [] },
    { id: 'gest_alto', name: 'Gestión en Equipos Alto Desempeño', sem: 7, cat: 'Gestión y Empleabilidad', reqs: [] },

    { id: 'des_org', name: 'Desarrollo Organizacional', sem: 8, cat: 'Formación Profesional', reqs: [] },
    { id: 'comp_etica', name: 'Compliance y Ética', sem: 8, cat: 'Formación Profesional', reqs: [] },
    { id: 'tall_erp', name: 'Taller de ERP', sem: 8, cat: 'Formación Profesional', reqs: [] },
    { id: 'tall_emp', name: 'Taller de Emprendimiento', sem: 8, cat: 'Formación Profesional', reqs: ['tall_inn'] },
    { id: 'elec_3_id', name: 'Electivo III: Formación e Identidad', sem: 8, cat: 'Formación e Identidad', reqs: [] },

    { id: 'hito_2', name: 'Hito Integrativo Interprofesional', sem: 8.5, cat: 'Hito', reqs: ['SEM_6', 'SEM_7'] },

    { id: 'plan_neg', name: 'Plan de Negocios', sem: 9, cat: 'Formación Profesional', reqs: [] },
    { id: 'trans_dig', name: 'Transformación Digital', sem: 9, cat: 'Formación Profesional', reqs: ['data_sci'] },
    { id: 'elec_1', name: 'Electivo I', sem: 9, cat: 'Formación Profesional', reqs: ['SEM_1', 'SEM_2', 'SEM_3', 'SEM_4', 'SEM_5', 'SEM_6', 'SEM_7'] },
    { id: 'elec_2', name: 'Electivo II', sem: 9, cat: 'Formación Profesional', reqs: ['SEM_1', 'SEM_2', 'SEM_3', 'SEM_4', 'SEM_5', 'SEM_6', 'SEM_7'] },
    { id: 'elec_3', name: 'Electivo III', sem: 9, cat: 'Formación Profesional', reqs: ['SEM_1', 'SEM_2', 'SEM_3', 'SEM_4', 'SEM_5', 'SEM_6', 'SEM_7'] },
    { id: 'gest_carr', name: 'Gestión de Carrera', sem: 9, cat: 'Gestión y Empleabilidad', reqs: [] },

    { id: 'prac_prof', name: 'Práctica Profesional', sem: 10, cat: 'Formación Profesional', reqs: ['SEM_1', 'SEM_2', 'SEM_3', 'SEM_4', 'SEM_5', 'SEM_6', 'SEM_7', 'SEM_8'] },
];

// 2. Estado de la Aplicación
let aprobados = JSON.parse(localStorage.getItem('ramos_aprobados')) || [];

// 3. Inicialización
const container = document.getElementById('malla-container');

function init() {
    renderMalla();
    updateProgress();
}

function renderMalla() {
    container.innerHTML = '';
    const semestres = [1, 2, 3, 4, 4.5, 5, 6, 7, 8, 8.5, 9, 10];

    semestres.forEach(sem => {
        const col = document.createElement('div');
        
        if (sem % 1 !== 0) { // Es un Hito
            col.className = 'hito-col';
            const hitoData = malla.find(r => r.sem === sem);
            col.innerHTML = `
                <div class="hito-title">${hitoData.name}</div>
                <div class="ramo ${aprobados.includes(hitoData.id) ? 'aprobado' : ''}" 
                     onclick="toggleRamo('${hitoData.id}')">
                    <span>Certificar</span>
                </div>
            `;
        } else {
            col.className = 'semester-col';
            col.innerHTML = `<div class="semester-header">Semestre ${sem}</div>`;
            
            const categorias = [...new Set(malla.map(r => r.cat))].filter(c => c !== 'Hito');
            
            categorias.forEach(cat => {
                const ramosEnCat = malla.filter(r => r.sem === sem && r.cat === cat);
                if (ramosEnCat.length > 0) {
                    const catLabel = document.createElement('div');
                    catLabel.className = 'category-label';
                    catLabel.innerText = cat;
                    col.appendChild(catLabel);
                    
                    ramosEnCat.forEach(ramo => {
                        const ramoDiv = document.createElement('div');
                        ramoDiv.className = `ramo ${aprobados.includes(ramo.id) ? 'aprobado' : ''}`;
                        ramoDiv.id = ramo.id;
                        ramoDiv.innerHTML = `<span>${ramo.name}</span>`;
                        ramoDiv.onclick = () => toggleRamo(ramo.id);
                        col.appendChild(ramoDiv);
                    });
                }
            });
        }
        container.appendChild(col);
    });
}

// 4. Lógica de Aprobación y Requisitos
function toggleRamo(id) {
    const ramo = malla.find(r => r.id === id);
    
    if (aprobados.includes(id)) {
        // Lógica para desmarcar (opcional: podrías validar que no sea requisito de otro ya aprobado)
        aprobados = aprobados.filter(item => item !== id);
    } else {
        const faltantes = checkRequirements(ramo);
        if (faltantes.length === 0) {
            aprobados.push(id);
        } else {
            showNotification(`No puedes aprobar esto aún. Faltan: ${faltantes.join(', ')}`);
            return;
        }
    }
    
    save();
    renderMalla();
    updateProgress();
}

function checkRequirements(ramo) {
    let faltantes = [];
    
    ramo.reqs.forEach(req => {
        if (req.startsWith('SEM_')) {
            const numSemestre = parseInt(req.split('_')[1]);
            const ramosDelSemestre = malla.filter(r => r.sem === numSemestre);
            const todosAprobados = ramosDelSemestre.every(r => aprobados.includes(r.id));
            if (!todosAprobados) faltantes.push(`Todo el Semestre ${numSemestre}`);
        } else {
            if (!aprobados.includes(req)) {
                const nombreReq = malla.find(r => r.id === req).name;
                faltantes.push(nombreReq);
            }
        }
    });
    
    return faltantes;
}

// 5. Utilidades
function save() {
    localStorage.setItem('ramos_aprobados', JSON.stringify(aprobados));
}

function updateProgress() {
    const total = malla.length;
    const current = aprobados.length;
    const percentage = Math.round((current / total) * 100);
    document.getElementById('progress-fill').style.width = `${percentage}%`;
    document.getElementById('progress-text').innerText = `Progreso: ${percentage}% (${current}/${total} ramos)`;
}

function showNotification(msg) {
    const el = document.getElementById('notification');
    el.innerText = msg;
    el.classList.remove('hidden');
    setTimeout(() => el.classList.add('hidden'), 3500);
}

init();
