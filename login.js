document.getElementById('sandbox-btn').addEventListener('click', (e) => {
    e.preventDefault();
    
    // Create a mock session for the static archive
    const mockSession = {
        authenticated: true,
        name: "Archive Visitor",
        team_name: "Archive Explorer",
        registration_number: "ARCHIVE-000",
        is_admin: false,
        scores: {
            round_1: null,
            round_2: null,
            round_3: null,
            round_4: null,
            round_5: null
        }
    };

    try {
        localStorage.setItem('cyber_odyssey_session', JSON.stringify(mockSession));
        
        // Reset cheat strikes for a fresh playthrough
        sessionStorage.removeItem('cheatStrikes');

        window.location.href = 'index.html';
    } catch (err) {
        const errorEl = document.getElementById('login-error');
        errorEl.textContent = '> LOCAL_STORAGE_ERROR: Please enable cookies/storage.';
        errorEl.classList.add('visible');
    }
});
