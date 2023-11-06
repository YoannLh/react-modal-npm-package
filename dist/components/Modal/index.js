import "../../assets/index.css";
import { jsx as I, jsxs as u } from "react/jsx-runtime";
import { useState as N, useEffect as D } from "react";
const l = "_overlay_y7scf_1", r = "_modal_y7scf_10", z = "_cross_y7scf_21", d = "_text_y7scf_28", c = {
  overlay: l,
  modal: r,
  cross: z,
  text: d
}, m = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNC4yIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDIzIEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzQyLjYgMTUwLjZjMTIuNS0xMi41IDEyLjUtMzIuOCAwLTQ1LjNzLTMyLjgtMTIuNS00NS4zIDBMMTkyIDIxMC43IDg2LjYgMTA1LjRjLTEyLjUtMTIuNS0zMi44LTEyLjUtNDUuMyAwcy0xMi41IDMyLjggMCA0NS4zTDE0Ni43IDI1NiA0MS40IDM2MS40Yy0xMi41IDEyLjUtMTIuNSAzMi44IDAgNDUuM3MzMi44IDEyLjUgNDUuMyAwTDE5MiAzMDEuMyAyOTcuNCA0MDYuNmMxMi41IDEyLjUgMzIuOCAxMi41IDQ1LjMgMHMxMi41LTMyLjggMC00NS4zTDIzNy4zIDI1NiAzNDIuNiAxNTAuNnoiLz48L3N2Zz4=";
function j({
  visibleBool: M,
  injectedText: s,
  closeIsClicked: y
}) {
  const [t, o] = N(M), [i, a] = N(s);
  D(() => {
    s != "" && a(s), M != null && o(M);
  }, [M, s]);
  function L() {
    y !== void 0 && (y(t), o(!t));
  }
  return /* @__PURE__ */ I(
    "div",
    {
      className: `${c.overlay}`,
      style: { display: t ? "flex" : "none" },
      children: /* @__PURE__ */ u("div", { className: `${c.modal}`, children: [
        /* @__PURE__ */ I(
          "img",
          {
            className: `${c.cross}`,
            src: m,
            alt: "cross icon",
            onClick: () => L()
          }
        ),
        /* @__PURE__ */ I("p", { className: `${c.text}`, children: i })
      ] })
    }
  );
}
export {
  j as Modal
};
