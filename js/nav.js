document.querySelector('#btnAbout').addEventListener('click', function(e) {
    e.preventDefault();

let modal = document.querySelector('#about_message');

if (!modal) {
    modal = document.createElement('dialog');
    modal.id = 'about_message';
    modal.innerHTML = `
    <header>
        <h2>About us</h2>
        <button class="close">&times;</button>
    </header>
    <section>
        <p>Welcome to Food Repo</p>
    </section>
    `;
    modal.querySelector('.close').addEventListener('click', (e) => {
        e.preventDefault();
        modal.close();
    });
    modal.addEventListener('close', () => {
        this.blur();    // focus back to the button
    });
    document.body.append(modal);
}
    modal.showModal();
});
