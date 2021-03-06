let addSVGString = function(target) {
    var div = target.ownerDocument.createElement("div");
    div.innerHTML = `
  <div style="display: none;">
    <svg>
      <symbol id="KBEditortools_close" viewBox="0 0 32 32">
        <path d="M21.262 10l-5.275 5.269-5.25-5.244-0.738 0.738 5.25 5.238-5.25 5.244 0.738 0.731 5.25-5.238 5.275 5.262 0.738-0.731-5.275-5.269 5.275-5.262z"></path>
      </symbol>
      <symbol id="KBEditortools_align_center" viewBox="0 0 32 32">
        <path class="KBEditortools_align_center_p1" d="M8 9.1h16v1.7h-16v-1.7zM8 17.1h16v1.7h-16v-1.7z"></path>
        <path class="KBEditortools_align_center_p2" d="M12 13.1h8v1.7h-8v-1.7zM12 21.1h8v1.7h-8v-1.7z"></path>
      </symbol>
      <symbol id="KBEditortools_align_justify" viewBox="0 0 32 32">
        <path class="KBEditortools_align_justify_p1" d="M8 9.1h16v1.7h-16v-1.7zM8 17.1h16v1.7h-16v-1.7z"></path>
        <path class="KBEditortools_align_justify_p2" d="M8 13.1h16v1.7h-16v-1.7zM8 21.1h16v1.7h-16v-1.7z"></path>
      </symbol>
      <symbol id="KBEditortools_align_left" viewBox="0 0 32 32">
        <path class="KBEditortools_align_left_p1" d="M8 9.1h16v1.7h-16v-1.7zM8 17.1h16v1.7h-16v-1.7z"></path>
        <path class="KBEditortools_align_left_p2" d="M8 13.1h8v1.7h-8v-1.7zM8 21.1h8v1.7h-8v-1.7z"></path>
      </symbol>
      <symbol id="KBEditortools_align_right" viewBox="0 0 32 32">
        <path class="KBEditortools_align_right_p1" d="M8 9.1h16v1.7h-16v-1.7zM8 17.1h16v1.7h-16v-1.7z"></path>
        <path class="KBEditortools_align_right_p2" d="M16 13.1h8v1.7h-8v-1.7zM16 21.1h8v1.7h-8v-1.7z"></path>
      </symbol>
      <symbol id="KBEditortools_arrow" viewBox="0 0 32 32">
        <path d="M31.167 15.262l-14.942-14.942c-0.213-0.214-0.459-0.321-0.737-0.321s-0.523 0.107-0.737 0.321l-1.603 1.603c-0.214 0.214-0.32 0.459-0.32 0.738s0.107 0.524 0.32 0.737l12.602 12.601-12.601 12.601c-0.214 0.214-0.32 0.46-0.32 0.737s0.107 0.524 0.32 0.738l1.603 1.603c0.214 0.214 0.459 0.321 0.737 0.321s0.524-0.107 0.737-0.321l14.942-14.942c0.214-0.214 0.32-0.46 0.32-0.738s-0.107-0.524-0.32-0.738z"></path>
        <path d="M19.174 16c0-0.278-0.106-0.524-0.321-0.738l-14.941-14.942c-0.214-0.214-0.46-0.321-0.737-0.321s-0.524 0.107-0.737 0.321l-1.603 1.603c-0.214 0.214-0.321 0.459-0.321 0.738s0.107 0.524 0.321 0.737l12.601 12.601-12.601 12.601c-0.214 0.214-0.321 0.46-0.321 0.737s0.107 0.524 0.321 0.738l1.603 1.603c0.214 0.214 0.46 0.321 0.738 0.321s0.524-0.107 0.737-0.321l14.941-14.942c0.215-0.214 0.321-0.46 0.321-0.738z"></path>
      </symbol>
      <symbol id="KBEditortools_bgclr" viewBox="0 0 32 32">
        <path class="KBEditortools_bgclr_p1" d="M19.6 13l-5.3-5.3-1.6 1.5c-2.7-0.4-4.6 0.6-5.3 1.8-0.8 1.5 0 3.1 0 3.1 0.7 1.4 1.7 2.3 3 2.5 0.3 0.1 0.6 0.1 0.9 0.1 1.3 0 2.7-0.6 3.7-1.2 0.3 0.2 0.6 0.3 1 0.3 0.9 0 1.7-0.8 1.7-1.7s-0.8-1.7-1.7-1.7c-0.9 0-1.7 0.8-1.7 1.7 0 0.1 0 0.2 0 0.3-1 0.6-2.4 1.1-3.6 0.9-0.9-0.2-1.6-0.8-2.1-1.8 0 0-0.5-1-0.1-1.8 0.4-0.7 1.4-1.1 2.9-1.3l-2.4 2.4v0.1c0.2 0.4 0.5 0.8 0.7 1l4-4c0.2-0.2 0.4-0.3 0.7-0.3s0.5 0.1 0.7 0.3l4.9 4.9c0.4 0.4 0.4 1 0 1.4l-6.3 6.3c-0.4 0.4-1 0.4-1.4 0l-4.9-4.9c-0.2-0.2-0.3-0.4-0.3-0.7s0.1-0.5 0.3-0.7l0.5-0.5c-0.3-0.3-0.6-0.7-0.8-1.1l-0.7 0.7c-0.4 0.4-0.7 1-0.7 1.7 0 0.6 0.2 1.2 0.7 1.7l4.9 4.9c0.4 0.4 1 0.7 1.7 0.7s1.2-0.2 1.7-0.7l7.7-7.7-2.8-2.9z"></path>
        <path class="KBEditortools_bgclr_p2" d="M12.3 22.6c0.4 0.4 1 0.4 1.4 0l6.6-6.6c0.4-0.4 0.4-1 0-1.4l-1.3-1.2c-0.3 0.9-3.5 4.1-6.1 4.4-2.5 0.3-5.8-1.6-5.8-1.6 0 0.2-0.1 0.4-0.1 0.7s0.1 0.5 0.3 0.7l5 5zM24.2 16.6c-0.1 0-0.2 0.1-0.3 0.1-0.3 0.4-1.6 2.2-1.6 3.1 0 1.1 0.9 1.9 1.9 1.9 1.1 0 1.9-0.9 1.9-1.9 0-0.9-1.3-2.7-1.6-3.1-0.1 0-0.2-0.1-0.3-0.1v0z"></path>
      </symbol>
      <symbol id="KBEditortools_block_down_arrow" viewBox="0 0 32 32">
        <path d="M0 8h32l-16 16-16-16z"></path>
      </symbol>
      <symbol id="KBEditortools_clr" viewBox="0 0 32 32">
        <path class="KBEditortools_clr_p1" d="M19 19.3l4.5-4.5c0.2-0.2 0.3-0.4 0.3-0.6s-0.1-0.5-0.3-0.6l-3.9-3.9c-0.2-0.2-0.4-0.3-0.6-0.3s-0.5 0.1-0.6 0.3l-4.6 4.3 5.2 5.3z"></path>
        <path class="KBEditortools_clr_p2" d="M21.1 22.5h-3.5l6.7-6.7c0.4-0.4 0.7-1 0.7-1.6s-0.2-1.2-0.7-1.6l-3.8-3.8c-0.4-0.4-1-0.7-1.6-0.7s-1.2 0.2-1.6 0.7l-9.6 9.6c-0.9 0.9-0.9 2.4 0 3.3l2.1 2.1c0.1 0.1 0.3 0.2 0.6 0.2h10.7c0.4 0 0.7-0.3 0.7-0.7 0-0.5-0.3-0.8-0.7-0.8zM18.3 9.7c0.2-0.2 0.4-0.3 0.6-0.3s0.5 0.1 0.6 0.3l3.8 3.8c0.2 0.2 0.3 0.4 0.3 0.6s-0.1 0.5-0.3 0.6l-4.3 4.4-5-5.1 4.3-4.3zM10.6 22.5l-1.9-1.9c-0.4-0.4-0.4-0.9 0-1.3l4.3-4.3 5.1 5.1-2.4 2.4h-5.1zM23.9 22.6h-0.5c-0.4 0-0.6 0.3-0.6 0.6 0 0.4 0.3 0.6 0.6 0.6h0.5c0.4 0 0.6-0.3 0.6-0.6s-0.2-0.6-0.6-0.6z"></path>
      </symbol>
      <symbol id="KBEditortools_clrpick" viewBox="0 0 32 32">
        <path class="KBEditortools_clrpick_p1" d="M21.5 10.6l-1.3 1.3 0.3 0.3c0.2 0.2 0.3 0.6 0.2 1-0.1 0.3-0.2 0.6-0.4 0.8s-0.5 0.3-0.8 0.3-0.6-0.1-0.8-0.3l-0.4-0.4-5.9 5.9c-0.5 0.3-1 0.5-1.5 0.5s-1-0.2-1.3-0.5c-0.3-0.3-0.5-0.8-0.5-1.3s0.2-1 0.5-1.3l5.9-5.9-0.4-0.4c-0.2-0.2-0.3-0.5-0.3-0.8s0.1-0.6 0.3-0.8c0.3-0.3 0.8-0.5 1.1-0.5s0.6 0.1 0.7 0.3l0.3 0.3 1.3-1.3c0.4-0.6 0.9-0.8 1.5-0.8s1.1 0.2 1.5 0.6c0.4 0.4 0.6 0.9 0.6 1.5s-0.2 1.1-0.6 1.5z"></path>
        <path class="KBEditortools_clrpick_p2" d="M16.2 9.5c-0.1 0-0.3 0.1-0.4 0.2l0.8 0.9 2.7 2.7c0.2-0.1 0.3-0.3 0.3-0.4l-3.4-3.4z"></path>
        <path class="KBEditortools_clrpick_p3" d="M23.4 23.5h-9.4c-0.5 0-0.8-0.4-0.8-0.8s0.4-0.8 0.8-0.8h9.3c0.5 0 0.8 0.4 0.8 0.8s-0.3 0.8-0.7 0.8zM10.4 17.6c-0.1 0.1-0.2 0.3-0.2 0.6 0 0.2 0.1 0.4 0.2 0.6 0.1 0.1 0.3 0.2 0.6 0.2 0.2 0 0.4-0.1 0.6-0.2l5.9-5.9-1.1-1.1-6 5.8zM9.5 20.3c-0.1 0-0.2 0-0.3 0.1-0.2 0.3-1.5 2-1.5 2.8 0 1 0.8 1.7 1.7 1.7 1 0 1.7-0.8 1.7-1.7 0-0.8-1.2-2.5-1.5-2.8 0.2-0.1 0.1-0.1-0.1-0.1v0z"></path>
      </symbol>
      <symbol id="KBEditortools_code" viewBox="0 0 32 32">
        <path class="KBEditortools_code_p1" d="M11.4 23.9c-1.1-0.3-1.8-0.8-2.2-1.4s-0.7-1.4-0.7-2.4v-1.6c0-0.5-0.1-0.9-0.4-1.2-0.2-0.3-0.6-0.5-1.1-0.5v-1.6c0.5 0 0.9-0.1 1.1-0.4s0.4-0.7 0.4-1.3v-1.6c0-0.9 0.2-1.7 0.7-2.4 0.4-0.6 1.2-1.1 2.2-1.4l0.5 1.3c-0.5 0.2-0.8 0.5-1 0.9s-0.3 1-0.3 1.6v1.6c0 0.6-0.1 1.1-0.4 1.5-0.2 0.4-0.6 0.8-1.1 1 0.5 0.3 0.9 0.6 1.1 1s0.4 0.9 0.4 1.5v1.6c0 0.6 0.1 1.2 0.3 1.6s0.5 0.7 1 0.9l-0.5 1.3zM20.2 22.6c0.5-0.2 0.8-0.5 1-0.9s0.3-1 0.3-1.6v-1.6c0-0.6 0.1-1.1 0.4-1.5 0.2-0.4 0.6-0.8 1.1-1-0.5-0.2-0.9-0.6-1.1-1s-0.4-0.9-0.4-1.5v-1.6c0-0.6-0.1-1.2-0.3-1.6s-0.5-0.7-1-0.9l0.5-1.3c1 0.3 1.8 0.8 2.2 1.4s0.7 1.4 0.7 2.4v1.6c0 0.5 0.1 1 0.3 1.3s0.6 0.4 1.1 0.4v1.6c-0.5 0-0.9 0.1-1.1 0.4s-0.3 0.7-0.3 1.2v1.6c0 0.9-0.2 1.7-0.7 2.4-0.4 0.6-1.2 1.1-2.2 1.4l-0.5-1.2z"></path>
      </symbol>
      <symbol id="KBEditortools_collapse" viewBox="0 0 32 32">
        <path class="KBEditortools_collapse_p1" d="M18.6 13.7v4.9h-4.9v-4.9h4.9zM19.3 13h-6.3v6.4h6.4v-6.4h-0.1zM8.3 20.4h2.9l-2.6 2.6v0.9l3-3v2.9c0 0.2 0.1 0.3 0.3 0.3s0.3-0.1 0.3-0.3v-3.7c0-0.1-0.1-0.1-0.2-0.2h-3.7c-0.2 0-0.3 0.1-0.3 0.3 0 0 0.1 0.2 0.3 0.2zM8.3 12.2h3.7c0.1 0 0.1-0.1 0.2-0.2v-3.7c0-0.2-0.1-0.3-0.3-0.3s-0.3 0.1-0.3 0.3v2.9l-3-3v0.9l2.6 2.6h-2.9c-0.2 0-0.3 0.1-0.3 0.3 0 0.1 0.1 0.2 0.3 0.2zM19.8 12c0 0.1 0.1 0.1 0.2 0.2h3.7c0.2 0 0.3-0.1 0.3-0.3s-0.1-0.3-0.3-0.3h-2.9l2.3-2.3v-0.8l-2.7 2.7v-2.9c0-0.2-0.1-0.3-0.3-0.3s-0.3 0.1-0.3 0.3v3.6c0 0.1 0 0.1 0 0.1zM20.1 24c0.2 0 0.3-0.1 0.3-0.3v-2.9l2.7 2.7v-0.9l-2.3-2.3h2.9c0.2 0 0.3-0.1 0.3-0.3s-0.1-0.3-0.3-0.3h-3.7c-0.1 0-0.1 0.1-0.2 0.2v3.7c0 0.3 0.1 0.4 0.3 0.4z"></path>
      </symbol>
      <symbol id="KBEditortools_decreaseindent" viewBox="0 0 32 32">
        <path class="KBEditortools_decreaseindent_p1" d="M8 9.1h16v1.7h-16v-1.7zM16 13.1h8v1.7h-8v-1.7zM16 17.1h8v1.7h-8v-1.7zM8 21.1h16v1.7h-16v-1.7z"></path>
        <path class="KBEditortools_decreaseindent_p2" d="M10.2 11.9l3.7 3.7-3.7 3.8v-7.5z"></path>
      </symbol>
      <symbol id="KBEditortools_embed" viewBox="0 0 32 32">
        <path d="M18 23l3 3 10-10-10-10-3 3 7 7z"></path>
        <path d="M14 9l-3-3-10 10 10 10 3-3-7-7z"></path>
      </symbol>
      <symbol id="KBEditortools_embed_2" viewBox="0 0 32 32">
        <path d="M20.8 21.6l2.4 2.4 8-8-8-8-2.4 2.4 5.6 5.6z"></path>
        <path d="M11.2 10.4l-2.4-2.4-8 8 8 8 2.4-2.4-5.6-5.6z"></path>
        <path d="M17.533 6.963l1.736 0.474-4.8 17.6-1.736-0.474 4.8-17.6z"></path>
      </symbol>
      <symbol id="KBEditortools_expand" viewBox="0 0 32 32">
        <path class="KBEditortools_expand_p1" d="M18.6 13.7v4.9h-4.9v-4.9h4.9zM19.3 13h-6.3v6.4h6.4v-6.4h-0.1zM11.9 23.4h-2.9l2.6-2.6v-0.8l-3 3v-2.9c0-0.2-0.1-0.3-0.3-0.3s-0.3 0.1-0.3 0.3v3.7c0 0.1 0.1 0.1 0.2 0.2h3.7c0.2 0 0.3-0.1 0.3-0.3s-0.1-0.3-0.3-0.3zM11.9 8h-3.7c-0.1 0.1-0.1 0.1-0.2 0.2v3.7c0 0.2 0.1 0.3 0.3 0.3s0.3-0.1 0.3-0.3v-2.9l3 3v-0.9l-2.6-2.5h2.9c0.2 0 0.3-0.1 0.3-0.3s-0.1-0.3-0.3-0.3zM24 8.2c0-0.1-0.1-0.1-0.2-0.2h-3.7c-0.2 0-0.3 0.1-0.3 0.3s0.1 0.3 0.3 0.3h2.9l-2.3 2.3v0.9l2.7-2.8v2.9c0 0.2 0.1 0.3 0.3 0.3s0.3-0.1 0.3-0.3v-3.6c0 0 0-0.1 0-0.1zM23.7 19.8c-0.2 0-0.3 0.1-0.3 0.3v2.9l-2.7-2.7v0.9l2.3 2.3h-2.9c-0.2 0-0.3 0.1-0.3 0.3s0.1 0.3 0.3 0.3h3.7c0.1 0 0.1-0.1 0.2-0.2v-3.7c0-0.3-0.1-0.4-0.3-0.4z"></path>
      </symbol>
      <symbol id="KBEditortools_hr" viewBox="0 0 32 32">
        <path class="KBEditortools_hr_p1" d="M24.5 11.2h-0.5c-0.3 0-0.5-0.2-0.5-0.5s0.2-0.5 0.5-0.5h0.4c0.3 0 0.5 0.2 0.5 0.5s-0.1 0.5-0.4 0.5zM21.8 11.2h-1.1c-0.3 0-0.5-0.2-0.5-0.5s0.2-0.5 0.5-0.5h1.1c0.3 0 0.5 0.2 0.5 0.5s-0.2 0.5-0.5 0.5zM18.5 11.2h-1.1c-0.3 0-0.5-0.2-0.5-0.5s0.2-0.5 0.5-0.5h1.1c0.3 0 0.5 0.2 0.5 0.5s-0.2 0.5-0.5 0.5zM15.2 11.2h-1.1c-0.3 0-0.5-0.2-0.5-0.5s0.2-0.5 0.5-0.5h1.1c0.3 0 0.5 0.2 0.5 0.5s-0.2 0.5-0.5 0.5zM11.9 11.2h-1.1c-0.3 0-0.5-0.2-0.5-0.5s0.2-0.5 0.5-0.5h1.1c0.3 0 0.5 0.2 0.5 0.5s-0.2 0.5-0.5 0.5zM8.6 11.2h-1.1c-0.3 0-0.5-0.2-0.5-0.5s0.2-0.5 0.5-0.5h1.1c0.3 0 0.5 0.2 0.5 0.5s-0.2 0.5-0.5 0.5zM24.5 21.8h-0.5c-0.3 0-0.5-0.2-0.5-0.5s0.2-0.5 0.5-0.5h0.4c0.3 0 0.5 0.2 0.5 0.5 0.1 0.3-0.1 0.5-0.4 0.5zM21.8 21.8h-1.1c-0.3 0-0.5-0.2-0.5-0.5s0.2-0.5 0.5-0.5h1.1c0.3 0 0.5 0.2 0.5 0.5 0.1 0.3-0.2 0.5-0.5 0.5zM18.5 21.8h-1.1c-0.3 0-0.5-0.2-0.5-0.5s0.2-0.5 0.5-0.5h1.1c0.3 0 0.5 0.2 0.5 0.5 0.1 0.3-0.2 0.5-0.5 0.5zM15.2 21.8h-1.1c-0.3 0-0.5-0.2-0.5-0.5s0.2-0.5 0.5-0.5h1.1c0.3 0 0.5 0.2 0.5 0.5 0.1 0.3-0.2 0.5-0.5 0.5zM11.9 21.8h-1.1c-0.3 0-0.5-0.2-0.5-0.5s0.2-0.5 0.5-0.5h1.1c0.3 0 0.5 0.2 0.5 0.5 0.1 0.3-0.2 0.5-0.5 0.5zM8.6 21.8h-1.1c-0.3 0-0.5-0.2-0.5-0.5s0.2-0.5 0.5-0.5h1.1c0.3 0 0.5 0.2 0.5 0.5 0.1 0.3-0.2 0.5-0.5 0.5zM22.8 17.5h-13.6c-0.9 0-1.6-0.7-1.6-1.6v0c0-0.9 0.7-1.6 1.6-1.6h13.6c0.9 0 1.6 0.7 1.6 1.6v0c0.1 0.8-0.7 1.6-1.6 1.6z"></path>
      </symbol>
      <symbol id="KBEditortools_image" viewBox="0 0 32 32">
        <path d="M29.996 4c0.002 0.002 0.002 0.002 0.004 0.004v23.992c-0.002 0.002-0.002 0.002-0.004 0.004h-27.992c-0.002-0.002-0.002-0.002-0.004-0.004v-23.992c0.002-0.002 0.002-0.002 0.004-0.004h27.992zM30 2h-28c-1.1 0-2 0.9-2 2v24c0 1.1 0.9 2 2 2h28c1.1 0 2-0.9 2-2v-24c0-1.1-0.9-2-2-2v0z"></path>
        <path d="M26 9c0 1.656-1.344 3-3 3s-3-1.344-3-3 1.344-3 3-3 3 1.344 3 3z"></path>
        <path d="M28 26h-24v-4l7-12 8 10h2l7-6z"></path>
      </symbol>
      <symbol id="KBEditortools_more1" viewBox="0 0 32 32">
        <path d="M7.273 16c0 2.008-1.628 3.636-3.636 3.636s-3.636-1.628-3.636-3.636c0-2.008 1.628-3.636 3.636-3.636s3.636 1.628 3.636 3.636z"></path>
        <path d="M19.636 16c0 2.008-1.628 3.636-3.636 3.636s-3.636-1.628-3.636-3.636c0-2.008 1.628-3.636 3.636-3.636s3.636 1.628 3.636 3.636z"></path>
        <path d="M32 16c0 2.008-1.628 3.636-3.636 3.636s-3.636-1.628-3.636-3.636c0-2.008 1.628-3.636 3.636-3.636s3.636 1.628 3.636 3.636z"></path>
      </symbol>
      <symbol id="KBEditortools_increaseindent" viewBox="0 0 32 32">
        <path class="KBEditortools_increaseindent_p1" d="M8 9.1h16v1.7h-16v-1.7zM16 13.1h8v1.7h-8v-1.7zM16 17.1h8v1.7h-8v-1.7zM8 21.1h16v1.7h-16v-1.7z"></path>
        <path class="KBEditortools_increaseindent_p2" d="M13.9 11.9l-3.7 3.7 3.7 3.8v-7.5z"></path>
      </symbol>
      <symbol id="KBEditortools_insertimage" viewBox="0 0 32 32">
        <path class="KBEditortools_insertimage_p1" d="M23.8 9.9v12.2h-15.6v-12.2h15.6zM25 8.7h-18v14.6h18v-14.6zM19.4 12.6c0 0.9 0.8 1.7 1.7 1.7s1.7-0.8 1.7-1.7-0.8-1.7-1.7-1.7-1.7 0.8-1.7 1.7v0z"></path>
        <path class="KBEditortools_insertimage_p2" d="M22.3 20.4l-2.9-4.4-2.3 1.7-4.5-5.6-3.1 8.3h12.8z"></path>
      </symbol>
      <symbol id="KBEditortools_insertlink" viewBox="0 0 32 32">
        <path class="KBEditortools_insertlink_p1" d="M19 8c-1.3 0-2.6 0.5-3.6 1.5l-1.7 1.7c-0.3 0.3-0.3 0.9 0 1.3 0.3 0.3 0.9 0.3 1.3 0l1.7-1.7c1.3-1.3 3.3-1.3 4.6 0s1.3 3.3 0 4.6l-1.7 1.7c-0.3 0.3-0.3 0.9 0 1.3 0.3 0.3 0.9 0.3 1.3 0l1.7-1.7c2-2 2-5.2 0-7.1-1.1-1.1-2.3-1.6-3.6-1.6zM11.4 13.8c-0.2 0-0.5 0.1-0.6 0.3l-1.3 1.3c-1 1-1.5 2.2-1.5 3.6s0.5 2.6 1.5 3.6 2.2 1.5 3.6 1.5 2.6-0.5 3.6-1.5l1.3-1.3c0.3-0.3 0.3-0.9 0-1.3s-0.9-0.3-1.3 0l-1.3 1.3c-1.2 1.2-3.4 1.2-4.6 0-0.6-0.6-1-1.4-1-2.3s0.3-1.7 1-2.3l1.3-1.3c0.3-0.3 0.3-0.9 0-1.3-0.2-0.2-0.4-0.3-0.7-0.3z"></path>
        <path class="KBEditortools_insertlink_p2" d="M18.4 12.7c-0.2 0-0.5 0.1-0.6 0.3l-4.3 4.3c-0.3 0.3-0.3 0.9 0 1.3 0.3 0.3 0.9 0.3 1.3 0l4.3-4.3c0.3-0.3 0.3-0.9 0-1.3-0.2-0.2-0.4-0.3-0.7-0.3z"></path>
      </symbol>
      <symbol id="KBEditortools_inserttable" viewBox="0 0 32 32">
        <path d="M24 9.4c0-0.5-0.5-0.9-1-0.9h-14c-0.5 0-0.9 0.4-1 0.9v0 13.1c0 0.6 0.4 1 1 1h14c0.6 0 1-0.4 1-1v-13.1zM13 22.5h-4v-3h4v3zM13 18.6h-4v-3.1h4v3.1zM13 14.5h-4v-3h4v3zM18 22.5h-4v-3h4v3zM18 18.6h-4v-3.1h4v3.1zM18 14.5h-4v-3h4v3zM23 22.5h-4v-3h4v3zM23 18.6h-4v-3.1h4v3.1zM23 14.5h-4v-3h4v3z"></path>
      </symbol>
      <symbol id="KBEditortools_linkarticle" viewBox="0 0 32 32">
        <path class="KBEditortools_linkarticle_p1" d="M20.9,7.5l2.9,2.9c0.1,0.1,0.2,0.3,0.2,0.5c0,0.2,0,0.4-0.2,0.6l-2.9,2.9c-0.1,0.1-0.3,0.2-0.5,0.2
        c-0.2,0-0.4-0.1-0.5-0.2s-0.2-0.3-0.2-0.5s0.1-0.4,0.2-0.5l1.7-1.7h-1.2c-0.7,0-1.3,0.1-1.9,0.5c-0.6,0.2-1.2,0.6-1.6,1.2
        C16.3,14.1,16,15,16,16c0,1-0.2,1.9-0.7,2.8c-0.2,0.5-0.6,0.9-0.9,1.2c-0.6,0.6-1.2,1-1.9,1.3c-0.7,0.3-1.5,0.5-2.3,0.5H8.7
        c-0.2,0-0.4,0-0.5-0.2C8.1,21.5,8,21.3,8,21.1s0-0.4,0.2-0.5c0.1-0.1,0.3-0.2,0.5-0.2h1.5c0.7,0,1.3-0.1,1.9-0.5
        c0.6-0.3,1.1-0.7,1.5-1.2c0.6-0.8,0.9-1.7,0.9-2.7s0.2-1.9,0.7-2.8c0.3-0.5,0.6-0.9,0.9-1.2c0.5-0.6,1.2-1,1.9-1.3s1.5-0.5,2.3-0.5
        h1.2l-1.7-1.7c-0.1-0.1-0.2-0.3-0.2-0.5c0-0.2,0.1-0.4,0.2-0.5s0.3-0.2,0.5-0.2C20.6,7.3,20.7,7.4,20.9,7.5z"/>
        <path class="KBEditortools_linkarticle_p2" d="M12.5,9.8c-0.7-0.3-1.5-0.5-2.3-0.5H8.7c-0.2,0-0.4,0-0.5,0.2C8.1,9.7,8,9.8,8,10c0,0.2,0,0.4,0.2,0.5
        c0.1,0.1,0.3,0.2,0.5,0.2h1.5c0.7,0,1.3,0.1,1.9,0.5c0.6,0.3,1.1,0.7,1.5,1.2c0.2,0.3,0.4,0.5,0.5,0.8c0.1-0.2,0.2-0.4,0.3-0.5
        c0.2-0.3,0.4-0.6,0.6-0.8c-0.2-0.3-0.4-0.5-0.6-0.8C13.8,10.5,13.2,10.1,12.5,9.8z M23.8,19.7l-2.9-2.9c-0.1-0.1-0.3-0.2-0.5-0.2
        c-0.2,0-0.4,0.1-0.5,0.2c-0.1,0.1-0.2,0.3-0.2,0.5c0,0.2,0.1,0.4,0.2,0.5l1.7,1.7h-1.2c-0.7,0-1.3-0.1-1.9-0.5
        c-0.6-0.2-1.2-0.6-1.6-1.2c0,0-0.1-0.1-0.1-0.1c-0.1,0.5-0.3,1-0.6,1.5c0.5,0.6,1.1,1,1.9,1.3c0.7,0.3,1.5,0.5,2.3,0.5h1.2l-1.7,1.7
        c-0.1,0.1-0.2,0.3-0.2,0.5c0,0.2,0.1,0.4,0.2,0.5c0.1,0.1,0.3,0.2,0.5,0.2c0.2,0,0.4-0.1,0.5-0.2l2.9-2.9c0.1-0.1,0.2-0.3,0.2-0.5
        C24,20.1,24,19.9,23.8,19.7z"/>
      </symbol>
      <symbol id="KBEditortools_list_number" viewBox="0 0 32 32">
        <path class="KBEditortools_list_number_p1" d="M11.9 9.8h13v1.9h-13v-1.9zM11.9 15.3h13v1.9h-13v-1.9zM11.9 20.7h13v1.9h-13v-1.9z"></path>
        <path class="KBEditortools_list_number_p2" d="M7.1 12.6l0.6-0.1v-2.8h-0.6v-0.5l1.3-0.3v3.5l0.6 0.2v0.5h-1.9v-0.5zM7.1 18v-0.5l1.1-1.4c0.2-0.2 0.3-0.4 0.3-0.6 0.1-0.2 0.1-0.3 0.1-0.4 0-0.2 0-0.3-0.1-0.4s-0.2-0.2-0.3-0.2c-0.2 0-0.3 0.1-0.4 0.2s-0.1 0.3-0.1 0.5h-0.6c0-0.4 0.1-0.7 0.3-0.9 0.2-0.3 0.5-0.4 0.9-0.4s0.6 0.1 0.8 0.3 0.3 0.5 0.3 0.9c0 0.2-0.1 0.5-0.2 0.7s-0.3 0.5-0.6 0.8l-0.6 0.8h0.9l0.1-0.4h0.5v1h-2.4zM7.8 20.6h0.4c0.2 0 0.3-0.1 0.4-0.2s0.1-0.2 0.1-0.4c0-0.2 0-0.3-0.1-0.4s-0.2-0.2-0.3-0.2-0.2 0-0.3 0.1c-0.1 0.1-0.1 0.2-0.1 0.4h-0.8c0-0.3 0.1-0.6 0.3-0.8s0.5-0.3 0.8-0.3c0.4 0 0.6 0.1 0.9 0.3 0.2 0.2 0.3 0.5 0.3 0.9 0 0.2 0 0.4-0.1 0.5-0.1 0.2-0.2 0.3-0.4 0.4 0.2 0.1 0.3 0.2 0.4 0.4s0.2 0.4 0.2 0.6c0 0.4-0.1 0.7-0.3 0.9s-0.5 0.3-0.9 0.3c-0.3 0-0.6-0.1-0.8-0.3s-0.3-0.5-0.3-0.9v0h0.7c0 0.2 0 0.3 0.1 0.4s0.2 0.2 0.4 0.2 0.3-0.1 0.4-0.2c0.1-0.1 0.1-0.2 0.1-0.4s0-0.4-0.1-0.5-0.2-0.2-0.4-0.2h-0.6v-0.6z"></path>
      </symbol>
      <symbol id="KBEditortools_list_round" viewBox="0 0 32 32">
        <path class="KBEditortools_list_round_p1" d="M11.8 9.3h13.2v2h-13.2v-2zM11.8 14.9h13.2v2h-13.2v-2zM11.8 20.4h13.2v2h-13.2v-2z"></path>
        <path class="KBEditortools_list_round_p2" d="M8.3 20.1c0.7 0 1.3 0.6 1.3 1.3s-0.6 1.3-1.3 1.3-1.3-0.6-1.3-1.3 0.6-1.3 1.3-1.3zM8.3 14.6c0.7 0 1.3 0.6 1.3 1.3s-0.6 1.3-1.3 1.3-1.3-0.6-1.3-1.3 0.6-1.3 1.3-1.3zM8.3 9.3c0.7 0 1.3 0.6 1.3 1.3s-0.6 1.3-1.3 1.3-1.3-0.6-1.3-1.3 0.6-1.3 1.3-1.3z"></path>
      </symbol>
      <symbol id="KBEditortools_pen" viewBox="0 0 32 32">
        <path d="M31.092 5.761l-4.853-4.853c-0.586-0.586-1.364-0.908-2.193-0.908s-1.607 0.322-2.193 0.908l-20.314 20.314c-0.193 0.193-0.317 0.444-0.354 0.714l-1.174 8.65c-0.052 0.386 0.078 0.774 0.354 1.049 0.235 0.235 0.553 0.365 0.881 0.365 0.056 0 0.112-0.004 0.168-0.011l8.65-1.174c0.27-0.037 0.521-0.161 0.714-0.354l20.314-20.314c0.586-0.586 0.908-1.364 0.908-2.193s-0.322-1.607-0.908-2.193zM9.312 28.401l-6.61 0.897 0.897-6.61 14.395-14.395 5.713 5.713-14.395 14.395zM29.329 8.384l-3.859 3.859-5.713-5.713 3.859-3.859c0.155-0.155 0.336-0.178 0.43-0.178s0.275 0.023 0.43 0.178l4.853 4.853c0.155 0.155 0.178 0.336 0.178 0.43s-0.023 0.275-0.178 0.43z"></path>
      </symbol>
      <symbol id="KBEditortools_quote" viewBox="0 0 32 32">
        <path d="M13.867 21.6c0 3.733-2.667 6.667-6.4 6.667-4.267 0-6.4-4-6.4-8.267 0-6.933 4.533-14.667 12.8-16.533l0.8 2.4c-4 1.867-6.667 5.333-6.667 9.333 3.467 0.267 5.867 2.933 5.867 6.4zM29.6 21.6c0 3.733-2.667 6.667-6.4 6.667-4.267 0-6.4-4-6.4-8.267 0-6.933 4.533-14.667 12.8-16.267l0.8 2.4c-4 1.867-6.667 5.333-6.667 9.333 3.467 0 5.867 2.667 5.867 6.133z"></path>
      </symbol>
      <symbol id="KBEditortools_removelink_black" viewBox="0 0 32 32">
        <path d="M13.9 16.8l-0.4 0.4c-0.3 0.3-0.3 0.9 0 1.3 0.3 0.3 0.9 0.3 1.3 0l0.4-0.4-1.3-1.3zM17.7 15.6l1.4-1.4c0.3-0.3 0.3-0.9 0-1.3-0.2-0.2-0.4-0.3-0.6-0.3s-0.5 0.1-0.6 0.3l-1.4 1.4 1.2 1.3zM22.5 9.5c-1-1-2.3-1.5-3.6-1.5s-2.6 0.5-3.6 1.5l-1.7 1.7c-0.1 0.1-0.1 0.1-0.1 0.2l1.2 1.2c0.1 0 0.1-0.1 0.2-0.1l1.7-1.7c1.3-1.3 3.3-1.3 4.6 0s1.3 3.3 0 4.6l-1.7 1.7c-0.1 0.1-0.1 0.1-0.1 0.2l1.2 1.2c0.1 0 0.1-0.1 0.2-0.1l1.7-1.7c2-2.1 2-5.3 0-7.2zM10.7 21.3c-0.6-0.6-1-1.4-1-2.3s0.3-1.7 1-2.3l1.3-1.3c0.1-0.1 0.1-0.1 0.1-0.2l-1.1-1.3c-0.1 0-0.1 0.1-0.2 0.1l-1.3 1.3c-1 1-1.5 2.2-1.5 3.6s0.5 2.6 1.5 3.6 2.2 1.5 3.5 1.5 2.6-0.5 3.6-1.5l1.3-1.3c0.1-0.1 0.1-0.1 0.1-0.2l-1.2-1.2c-0.1 0-0.1 0.1-0.2 0.1l-1.3 1.3c-1.2 1.3-3.3 1.3-4.6 0.1zM9.8 9.3c0.2 0 0.5 0.1 0.6 0.3l12.9 12.9c0.3 0.3 0.3 0.9 0 1.3-0.3 0.3-0.9 0.3-1.3 0l-12.8-12.9c-0.3-0.3-0.3-0.9 0-1.3 0.2-0.2 0.4-0.3 0.6-0.3z"></path>
      </symbol>
      <symbol id="KBEditortools_removelink" viewBox="0 0 32 32">
        <path class="KBEditortools_removelink_p1" d="M13.9 16.8l-0.4 0.4c-0.3 0.3-0.3 0.9 0 1.3 0.3 0.3 0.9 0.3 1.3 0l0.4-0.4-1.3-1.3zM17.7 15.6l1.4-1.4c0.3-0.3 0.3-0.9 0-1.3-0.2-0.2-0.4-0.3-0.6-0.3s-0.5 0.1-0.6 0.3l-1.4 1.4 1.2 1.3zM22.5 9.5c-1-1-2.3-1.5-3.6-1.5s-2.6 0.5-3.6 1.5l-1.7 1.7c-0.1 0.1-0.1 0.1-0.1 0.2l1.2 1.2c0.1 0 0.1-0.1 0.2-0.1l1.7-1.7c1.3-1.3 3.3-1.3 4.6 0s1.3 3.3 0 4.6l-1.7 1.7c-0.1 0.1-0.1 0.1-0.1 0.2l1.2 1.2c0.1 0 0.1-0.1 0.2-0.1l1.7-1.7c2-2.1 2-5.3 0-7.2zM10.7 21.3c-0.6-0.6-1-1.4-1-2.3s0.3-1.7 1-2.3l1.3-1.3c0.1-0.1 0.1-0.1 0.1-0.2l-1.1-1.3c-0.1 0-0.1 0.1-0.2 0.1l-1.3 1.3c-1 1-1.5 2.2-1.5 3.6s0.5 2.6 1.5 3.6 2.2 1.5 3.5 1.5 2.6-0.5 3.6-1.5l1.3-1.3c0.1-0.1 0.1-0.1 0.1-0.2l-1.2-1.2c-0.1 0-0.1 0.1-0.2 0.1l-1.3 1.3c-1.2 1.3-3.3 1.3-4.6 0.1z"></path>
        <path class="KBEditortools_removelink_p2" d="M9.8 9.3c0.2 0 0.5 0.1 0.6 0.3l12.9 12.9c0.3 0.3 0.3 0.9 0 1.3-0.3 0.3-0.9 0.3-1.3 0l-12.8-12.9c-0.3-0.3-0.3-0.9 0-1.3 0.2-0.2 0.4-0.3 0.6-0.3z"></path>
      </symbol>
      <symbol id="KBEditortools_spellcheck" viewBox="0 0 32 32">
        <path class="KBEditortools_spellcheck_p1" d="M28.7 9c-0.6-0.3-1.3-0.5-2.1-0.5-1.5 0-2.6 0.5-3.5 1.5s-1.3 2.3-1.3 3.9v0.1c0 1.5 0.4 2.8 1.3 3.8 0.3 0.3 0.6 0.6 1 0.8l0.8-0.8c-0.3-0.2-0.6-0.4-0.9-0.8-0.6-0.8-0.9-1.8-0.9-3v-0.2c0-1.2 0.3-2.2 0.9-3s1.4-1.2 2.5-1.2c0.5 0 0.9 0.1 1.2 0.2s0.6 0.3 0.9 0.6l0.3 1.5h1v-1.9c-0.2-0.4-0.6-0.7-1.2-1zM18.6 13.6c0.5-0.2 0.9-0.5 1.2-0.8 0.3-0.4 0.4-0.8 0.4-1.3 0-1-0.3-1.7-0.9-2.2s-1.5-0.7-2.6-0.7h-4.7v0.9l1.2 0.2v8.3l-1.2 0.3v0.9h5.1c0 0 0 0 0-0.1 0-0.4 0.1-0.8 0.3-1.1-0.1 0-0.2 0-0.2 0h-2.5v-3.9h2.7c0.6 0 1.1 0.2 1.4 0.5 0.3 0.4 0.5 0.8 0.5 1.5 0 0.3 0 0.6-0.1 0.8h0.1c0.5 0 0.9 0.1 1.2 0.4 0.1-0.4 0.2-0.8 0.2-1.2 0-0.6-0.2-1.2-0.6-1.7-0.4-0.4-0.9-0.7-1.5-0.8zM17 13.1h-2.4v-3.3h2c0.7 0 1.2 0.1 1.6 0.4s0.5 0.7 0.5 1.3c0 0.5-0.2 0.9-0.5 1.2-0.2 0.3-0.6 0.4-1.2 0.4zM6.7 8.6h-1.2l-3.7 9.6-0.8 0.1v0.9h3v-0.9l-0.8-0.1 0.7-2h4.2l0.7 2-0.8 0.1v0.9h3v-0.9l-0.8-0.1-3.5-9.6zM4.4 15l1.7-4.5 1.7 4.5h-3.4z"></path>
        <path class="KBEditortools_spellcheck_p2" d="M30.8 15c0.1 0.1 0.2 0.3 0.2 0.5s-0.1 0.3-0.2 0.4l-7.5 7.5c-0.1 0.1-0.3 0.2-0.4 0.2s-0.3-0.1-0.4-0.2l-3.7-3.7c-0.1-0.1-0.2-0.3-0.2-0.4s0.1-0.3 0.2-0.5c0.1-0.1 0.3-0.2 0.5-0.2s0.3 0.1 0.4 0.2l3.3 3.3 7-7c0.1-0.1 0.3-0.2 0.4-0.2s0.3 0 0.4 0.1z"></path>
      </symbol>
      <symbol id="KBEditortools_sphere" viewBox="0 0 32 32">
        <path d="M15 2c-8.284 0-15 6.716-15 15s6.716 15 15 15c8.284 0 15-6.716 15-15s-6.716-15-15-15zM23.488 22c0.268-1.264 0.438-2.606 0.492-4h3.982c-0.104 1.382-0.426 2.722-0.958 4h-3.516zM6.512 12c-0.268 1.264-0.438 2.606-0.492 4h-3.982c0.104-1.382 0.426-2.722 0.958-4h3.516zM21.438 12c0.3 1.28 0.482 2.62 0.54 4h-5.978v-4h5.438zM16 10v-5.854c0.456 0.132 0.908 0.356 1.35 0.668 0.83 0.586 1.626 1.488 2.298 2.608 0.466 0.776 0.868 1.638 1.202 2.578h-4.852zM10.352 7.422c0.672-1.122 1.468-2.024 2.298-2.608 0.444-0.312 0.894-0.536 1.35-0.668v5.854h-4.852c0.336-0.94 0.738-1.802 1.202-2.578zM14 12v4h-5.978c0.058-1.38 0.24-2.72 0.54-4h5.438zM2.996 22c-0.532-1.278-0.854-2.618-0.958-4h3.982c0.056 1.394 0.224 2.736 0.492 4h-3.516zM8.022 18h5.978v4h-5.438c-0.3-1.28-0.482-2.62-0.54-4zM14 24v5.854c-0.456-0.132-0.908-0.356-1.35-0.668-0.83-0.586-1.626-1.488-2.298-2.608-0.466-0.776-0.868-1.638-1.204-2.578h4.852zM19.65 26.578c-0.672 1.122-1.468 2.024-2.298 2.608-0.444 0.312-0.894 0.536-1.35 0.668v-5.854h4.852c-0.336 0.94-0.738 1.802-1.204 2.578zM16 22v-4h5.978c-0.058 1.38-0.24 2.72-0.54 4h-5.438zM23.98 16c-0.056-1.394-0.224-2.736-0.492-4h3.516c0.534 1.278 0.854 2.618 0.958 4h-3.982zM25.958 10h-2.996c-0.582-1.836-1.386-3.446-2.354-4.732 1.33 0.636 2.534 1.488 3.584 2.54 0.672 0.672 1.262 1.404 1.766 2.192zM5.808 7.808c1.052-1.052 2.256-1.904 3.584-2.54-0.966 1.286-1.772 2.896-2.354 4.732h-2.996c0.504-0.788 1.094-1.522 1.766-2.192zM4.042 24h2.996c0.582 1.836 1.386 3.446 2.354 4.732-1.33-0.636-2.534-1.488-3.584-2.54-0.672-0.672-1.262-1.404-1.766-2.192zM24.192 26.192c-1.052 1.052-2.256 1.904-3.584 2.54 0.966-1.286 1.772-2.896 2.354-4.732h2.996c-0.504 0.788-1.094 1.522-1.766 2.192z"></path>
      </symbol>
      <symbol id="KBEditortools_txtbgclr" viewBox="0 0 32 32">
        <path class="KBEditortools_txtbgclr_p1" d="M7.3 17.9c-0.4 0.4-0.4 1 0 1.4l0.5 0.5 1.2-0.5-0.4 1.2 2.4 2.5 1.9-1.1-1 2 0.8 0.8c0.4 0.4 1 0.4 1.4 0l4.5-4.5-6.8-6.8-4.5 4.5z"></path>
        <path class="KBEditortools_txtbgclr_p2" d="M24.4 7.6v0c-0.4-0.5-1-0.7-1.7-0.6-1.3 0.2-2.7 1.7-3.8 3.9-0.3 0.6-0.7 1-1.2 1-1 0.2-2.3-0.6-3.1-1.3-0.2-0.2-0.4-0.2-0.6 0l-0.8 0.8 1.2 1.2c0.2 0.2 0.2 0.4 0 0.6s-0.4 0.2-0.6 0l-1.2-1.2-0.3 0.3c-0.2 0.2-0.2 0.4 0 0.6l6.8 6.8c0.2 0.2 0.4 0.2 0.6 0l1.7-1.7c0.2-0.2 0.2-0.4 0-0.6-0.8-0.8-1.5-2.1-1.3-3.1 0.1-0.5 0.4-0.9 1-1.2 2.2-1 3.7-2.4 3.9-3.8 0.1-0.7-0.1-1.3-0.6-1.7v0zM23.7 9.4c-0.3 0.3-0.7 0.3-1 0s-0.3-0.7 0-1 0.7-0.3 1 0c0.2 0.2 0.2 0.7 0 1v0z"></path>
      </symbol>
      <symbol id="KBEditortools_txtbold" viewBox="0 0 32 32">
        <path class="KBEditortools_txtbold_p1" d="M16.2 9c1.6 0 2.9 0.3 3.9 1s1.4 1.6 1.4 2.9c0 0.6-0.2 1.2-0.5 1.7s-0.8 0.9-1.5 1.1c0.8 0.2 1.5 0.6 1.9 1.2s0.6 1.3 0.6 2c0 1.3-0.4 2.4-1.3 3-0.9 0.7-2.1 1-3.8 1h-6.9v-1.7l1.5-0.3v-9.9l-1.5-0.3v-1.7h6.2zM14.3 14.9h2c0.8 0 1.3-0.2 1.7-0.5s0.6-0.8 0.6-1.3c0-0.6-0.2-1.1-0.6-1.4s-1-0.5-1.8-0.5h-1.9c0 0 0 3.7 0 3.7zM14.3 16.8v4h2.6c0.7 0 1.3-0.2 1.7-0.5s0.6-0.8 0.6-1.4c0-0.7-0.2-1.2-0.5-1.6s-0.9-0.5-1.6-0.5h-2.8z"></path>
      </symbol>
      <symbol id="KBEditortools_txtitalic" viewBox="0 0 32 32">
        <path class="KBEditortools_txtitalic_p1" d="M15.2 10.7l0.6-1.7h5.8l-0.6 1.7-1.7 0.3-3.9 10 1.4 0.3-0.6 1.7h-5.8l0.7-1.7 1.6-0.3 3.9-10-1.4-0.3z"></path>
      </symbol>
      <symbol id="KBEditortools_txtunderline" viewBox="0 0 32 32">
        <path class="KBEditortools_txtunderline_p1" d="M14.9 8v1.5l-1.3 0.3v6.3c0 0.8 0.2 1.4 0.6 1.8s1 0.6 1.8 0.6c0.8 0 1.4-0.2 1.8-0.6s0.7-1 0.7-1.8v-6.4l-1.3-0.3v-1.4h5v1.5l-1.3 0.3v6.3c0 1.4-0.4 2.4-1.3 3.2-0.9 0.7-2.1 1.1-3.5 1.1-1.5 0-2.6-0.4-3.5-1.1s-1.3-1.8-1.3-3.2v-6.4l-1.5-0.2v-1.5h5.1z"></path>
        <path class="KBEditortools_txtunderline_p2" d="M9.5 22h13v2h-13v-2z"></path>
      </symbol>
      <symbol id="KBEditortools_upload" viewBox="0 0 32 32">
        <path d="M6.667 0h18.667q1.656 0 2.828 1.172t1.172 2.828v18.667q0 1.656-1.172 2.828t-2.828 1.172h-5.333v-2.667h5.333q0.552 0 0.943-0.391t0.391-0.943v-18.667q0-0.552-0.391-0.943t-0.943-0.391h-18.667q-0.552 0-0.943 0.391t-0.391 0.943v18.667q0 0.552 0.391 0.943t0.943 0.391h5.333v2.667h-5.333q-1.656 0-2.828-1.172t-1.172-2.828v-18.667q0-1.656 1.172-2.828t2.828-1.172zM16 9.333q0.563 0 0.948 0.385l5.333 5.333q0.385 0.385 0.385 0.948 0 0.552-0.391 0.943t-0.943 0.391q-0.541 0-0.948-0.385l-3.052-3.063v16.781q0 0.552-0.391 0.943t-0.943 0.391-0.943-0.391-0.391-0.943v-16.781l-3.052 3.063q-0.407 0.385-0.948 0.385-0.552 0-0.943-0.391t-0.391-0.943q0-0.541 0.385-0.948l5.333-5.333q0.385-0.385 0.948-0.385z"></path>
      </symbol>
      <symbol id="KBEditortools_ltr" viewBox="0 0 32 32">
        <g>
          <path class="KBEditortools_ltr_p1" d="M12.1,22.9h-0.8V9.1h0.8c0.5,0,0.8-0.4,0.8-0.8c0-0.5-0.4-0.8-0.8-0.8H8.9C8.4,7.4,8,7.8,8,8.2
          c0,0.5,0.4,0.8,0.8,0.8h0.8v13.9H8.9c-0.5,0-0.8,0.4-0.8,0.8s0.4,0.8,0.8,0.8h3.2c0.5,0,0.8-0.4,0.8-0.8
          C12.9,23.3,12.6,22.9,12.1,22.9z"></path>
          <path class="KBEditortools_ltr_p2" d="M12.3,11.7l-0.9,2.5v5.3l0.2-0.7h3.7l0.5,1.4h2.1l-3.3-8.6L12.3,11.7L12.3,11.7z M12.1,17.2l1.3-3.7l1.3,3.7
          H12.1z M21.3,13.9c-1,0-1.9,0.3-2.7,1l0.6,1.1c0.5-0.5,1.2-0.7,1.8-0.7c0.8,0,1.3,0.4,1.3,1v0.8c-0.4-0.5-1.2-0.7-1.9-0.7
          c-1,0-2.2,0.6-2.2,2c0,1.4,1.2,2,2.2,2c0.8,0,1.5-0.3,1.9-0.8v0.6H24v-4C24,14.4,22.7,13.9,21.3,13.9z M22.3,18.7
          c-0.3,0.3-0.8,0.5-1.3,0.5c-0.6,0-1.2-0.3-1.2-0.9s0.5-0.9,1.2-0.9c0.5,0,1,0.2,1.3,0.6V18.7z"></path>
        </g>
      </symbol>
      <symbol id="KBEditortools_rtl" viewBox="0 0 32 32">
        <g>
          <path class="KBEditortools_rtl_p1" d="M23.4,22.9h-0.8V9.1h0.8c0.5,0,0.8-0.4,0.8-0.8c0-0.5-0.4-0.8-0.8-0.8h-3.2c-0.5,0-0.8,0.4-0.8,0.8
          c0,0.5,0.4,0.8,0.8,0.8H21v13.9h-0.8c-0.5,0-0.8,0.4-0.8,0.8s0.4,0.8,0.8,0.8h3.2c0.5,0,0.8-0.4,0.8-0.8S23.9,22.9,23.4,22.9z"></path>
          <path class="KBEditortools_rtl_p2" d="M11,11.7l-3.3,8.6h2.1l0.6-1.4H14l0.5,1.4h2.1l-3.3-8.6H11z M10.8,17.2l1.3-3.7l1.3,3.7H10.8z M20,13.9
          c-1,0-1.9,0.3-2.7,1l0.6,1.1c0.5-0.5,1.2-0.7,1.8-0.7s1.1,0.3,1.3,0.7V14C20.7,13.9,20.3,13.9,20,13.9z M16.9,18.3
          c0,1.4,1.2,2,2.2,2c0.8,0,1.5-0.3,1.9-0.7v-0.8c-0.3,0.3-0.7,0.5-1.2,0.5c-0.6,0-1.2-0.3-1.2-0.9s0.5-0.9,1.2-0.9
          c0.5,0,1,0.2,1.2,0.5V17c-0.4-0.5-1.1-0.7-1.9-0.7C18.1,16.3,16.9,16.8,16.9,18.3z"></path>
        </g>
      </symbol>
    </svg>
  </div>
  `;
    target.appendChild(div);
}