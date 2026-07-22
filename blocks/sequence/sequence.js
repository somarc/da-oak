export default function decorate(block) {
  const list = document.createElement('ol');
  list.className = 'sequence-list';

  [...block.children].forEach((row) => {
    const cells = [...row.children];
    if (!cells.length) return;

    const item = document.createElement('li');
    item.className = 'sequence-item';

    const label = document.createElement('div');
    label.className = 'sequence-label';
    while (cells[0]?.firstChild) label.append(cells[0].firstChild);
    item.append(label);

    const copy = document.createElement('div');
    copy.className = 'sequence-copy';
    while (cells[1]?.firstChild) copy.append(cells[1].firstChild);
    item.append(copy);

    if (cells[2]) {
      const output = document.createElement('aside');
      output.className = 'sequence-output';
      while (cells[2].firstChild) output.append(cells[2].firstChild);
      item.append(output);
    }

    list.append(item);
  });

  block.replaceChildren(list);
}
