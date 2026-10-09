
document.addEventListener('DOMContentLoaded', () => {
    const sidebarHTML = `
        <div class="sidebar-header">
            <h2>Menu de Operações</h2>
        </div>
        <ul class="sidebar-menu">
            <li><a href="index.html">Visão Geral</a></li>
            <li><a href="grafana.html">Grafana</a></li>
            <li><a href="zabbix.html">Zabbix</a></li>
            <li><a href="airflow.html">Apache Airflow</a></li>
            <li><a href="health.html">Health Check</a></li>
            <li><a href="monitoria.html">Monitorização</a></li>
            <li><a href="redmine.html">Redmine</a></li>
            <li><a href="tickets-unificado.html">Tickets Unificados</a></li>
            <li><a href="inventory.html">Inventário</a></li>
            <li><a href="bitrix.html">Bitrix24</a></li>
        </ul>
    `;

    const root = document.getElementById('sidebar-root');
    if (root) {
        root.innerHTML = sidebarHTML;
        
        // Garante que o contêiner raiz mantenha a classe estrutural CSS
        if (!root.classList.contains('sidebar')) {
            root.classList.add('sidebar');
        }

        // Mapeamento Dinâmico de Rota Ativa
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        const sidebarLinks = root.querySelectorAll('.sidebar-menu a');
        
        sidebarLinks.forEach(link => {
            const linkHref = link.getAttribute('href');
            if (linkHref === currentPath) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
});
