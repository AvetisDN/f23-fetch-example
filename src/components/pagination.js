function paginationButton(symbol, className, isDisabled, handler, newPage) {
  const icons = {
    ICON_FIRST: '<i class="fa-solid fa-angles-left"></i>',
    ICON_LAST: '<i class="fa-solid fa-angles-right"></i>',
    ICON_PREV: '<i class="fa-solid fa-chevron-left"></i>',
    ICON_NEXT: '<i class="fa-solid fa-chevron-right"></i>',
  };
  const btn = document.createElement("button");
  btn.classList.add(className);
  btn.disabled = isDisabled;
  btn.innerHTML = icons[symbol] || symbol;
  btn.addEventListener("click", () => {
    handler(newPage);
  });

  return btn;
  //   return `<button class="${className}" ${isDisabled ? "disabled" : ""}>${
  //     icons[symbol] || symbol
  //   }</button>`;
}

function pagination(total, limit, current, handler) {
  const pageCount = Math.ceil(total / limit);
  let code = document.createElement("div");

  code.append(
    paginationButton("ICON_FIRST", "page-first", current === 1, handler, 1)
  );
  code.append(
    paginationButton(
      "ICON_PREV",
      "page-prev",
      current === 1,
      handler,
      current - 1
    )
  );

  let arr = [1, 2, 3];

  if (current !== 1 && current !== pageCount) {
    arr = [current - 1, current, current + 1];
  }
  if (current === pageCount) {
    arr = [current - 2, current - 1, current];
  }

  for (let i = 0; i < arr.length; i++) {
    code.append(
      paginationButton(
        arr[i],
        current === arr[i] ? "current" : "a",
        false,
        handler,
        arr[i]
      )
    );
  }

  code.append(
    paginationButton(
      "ICON_NEXT",
      "page-next",
      current === pageCount,
      handler,
      current + 1
    )
  );
  code.append(
    paginationButton(
      "ICON_LAST",
      "page-last",
      current === pageCount,
      handler,
      pageCount
    )
  );

  return code;
}

export default pagination;
