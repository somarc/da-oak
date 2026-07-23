export default function decorate(block) {
  const list = document.createElement('dl');
  list.className = 'data-model-list';

  [...block.children].forEach((row) => {
    const [termCell, definitionCell] = [...row.children];
    if (!termCell || !definitionCell) return;

    const term = document.createElement('dt');
    const definition = document.createElement('dd');
    while (termCell.firstChild) term.append(termCell.firstChild);
    while (definitionCell.firstChild) definition.append(definitionCell.firstChild);
    list.append(term, definition);
  });

  block.replaceChildren(list);
}
