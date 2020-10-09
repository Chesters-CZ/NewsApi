

export function generateNewsBox(title, description) {
    let container = document.createElement('div');
    let header = document.createElement('h2');
    header.innerText = title;
    let desc = document.createElement('p');
    desc.innerText = description;

    container.appendChild(header);
    container.appendChild(desc);

    return container;
}
