

export function generateNewsBox(title, description, author, publishedAt, sourcename, link) {
    let container = document.createElement('div');
    let header = document.createElement('a');
    header.innerText = title;
    let desc = document.createElement('p');
    desc.innerText = description;
    let src = document.createElement('h5');
    src.innerText = "Published at " + publishedAt + " by " + author + " for " + sourcename;

    container.appendChild(header);
    container.appendChild(src);
    container.appendChild(desc);

    return container;
}
