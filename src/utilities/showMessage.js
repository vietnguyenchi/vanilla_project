const showMessage = (type = 'success', smg) => {
    const messageContainer = document.createElement('div');
    messageContainer.classList.add('position-absolute', 'top-0', 'end-0', 'z-3');
    const btn_class = (type === 'success') ? 'alert-success' : 'alert-danger';

    messageContainer.innerHTML = /*html*/`
        <div class="alert ${btn_class} alert-dismissible fade show custom-alert" role="alert">
            <strong class="me-3">${smg}</strong>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `;

    document.body.appendChild(messageContainer);
}

export default showMessage;