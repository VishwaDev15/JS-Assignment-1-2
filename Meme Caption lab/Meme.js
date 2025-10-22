const gallery = document.getElementById('gallery');
document.getElementById('createBtn').addEventListener('click', addMeme);

function addMeme() {
  const template = document.getElementById('template').value;
  const text = document.getElementById('caption').value.trim();

  if (!text) {
    alert('Enter a caption');
    return;
  }

  const meme = document.createElement('div');
  meme.className = 'meme';

  const imgBox = document.createElement('div');
  imgBox.className = 'meme-image';

  const img = document.createElement('img');
  img.src = template;
  img.alt = 'meme template';

  const caption = document.createElement('div');
  caption.className = 'caption';
  caption.textContent = text;

  imgBox.appendChild(img);
  imgBox.appendChild(caption);

  const controls = document.createElement('div');
  controls.className = 'controls';

  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.onclick = () => {
    const newText = prompt('Edit caption:', caption.textContent);
    if (newText !== null) caption.textContent = newText;
  };

  const delBtn = document.createElement('button');
  delBtn.textContent = 'Delete';
  delBtn.onclick = () => meme.remove();

  controls.appendChild(editBtn);
  controls.appendChild(delBtn);

  meme.appendChild(imgBox);
  meme.appendChild(controls);
  gallery.appendChild(meme);

  document.getElementById('caption').value = '';
}
