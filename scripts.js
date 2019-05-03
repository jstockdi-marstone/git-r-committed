function retrieveBestPractices() {
  fetch("./best-practices.json")
    .then(response => response.json())
    .then(res => {
      const { dos, donts } = res
      
      dos.forEach(item => addItem(item, "dos-item-list"));
      donts.forEach(item => addItem(item, "donts-item-list"));
    })
    .catch(console.error);
}

function addItem(item, listName) {
  const dt = document.createElement("dt")
  const dl = document.createElement("dd");
  const wrapper = document.createElement("div");
  const list = document.getElementById(listName);
  
  dt.appendChild(document.createTextNode(item.title));
  dl.appendChild(document.createTextNode(item.desc));
  
  wrapper.appendChild(dt);
  wrapper.appendChild(dl);
  
  list.appendChild(wrapper);
}