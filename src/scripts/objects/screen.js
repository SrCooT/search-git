const screen = {
    userProfile: document.querySelector('.profile-data'),

    renderUser(user) {
        this.userProfile.innerHTML =
            `<div class="info">
                <img src="${user.avatarUrl}" alt="Foto do perfil do usuário"/>
                    <div class="data">
                        <h1>${user.name ?? 'Não possui nome cadastrado 😪'} </h1>
                            <p>${user.bio ?? 'Não possui bio cadastrada 😪'} </p>
                            <p>👣 Seguidores: ${user.followers ?? ''}</p>
                            <p>👣 Seguindo: ${user.following ?? ''}</p>
                    </div>
            </div>`;

        let repositoriesItens = '';
        user.repositories.forEach(repo => repositoriesItens += 
        `<li>
            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                <div class="repos-info">
                    <p>🪢 ${repo.forks ?? 'Sem Forks'}</p>
                    <p>🌟 ${repo.stargazers_count ?? 'Sem Stars'}</p>
                    <p>👀 ${repo.watchers ?? 'Sem Watch'}</p>
                    <p>📖 ${repo.language ?? 'Sem linguage'}</p>
                </div>
        </li>`)

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                <h2>Repositórios</h2>
                    <ul>${repositoriesItens}</ul></div`;
        }

        let eventsItems = '';
            user.events.forEach((event) => {
                if (event.type === 'PushEvent') {
                    eventsItems += `<li>${event.repo.name}
                        <span>-${event.payload.commits[0].message}</span></li>`
                }
        })
        if (user.events.length > 0) {
            this.userProfile.innerHTML += `<div class="events">
                <h2>Eventos</h2>
                    <ul>${eventsItems}</ul></div`;
        }
    },

    renderNotFound() {
        this.userProfile.innerHTML = "<h3> Usuário não Localizado 😪</h3>";
    }
};

export { screen };