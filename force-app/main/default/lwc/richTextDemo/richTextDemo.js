/**
 * Created by Vytautas Germanavičius on 2024-05-21.
 */

import { LightningElement } from "lwc";
import SmartLinkPopup from "c/smartLinkPopup";

export default class RichTextDemo extends LightningElement {

  allowedFormats = [
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    // 'list',
    "indent",
    "align",
    "link",
    "image",
    "clean",
    "table",
    "header",
    "color",
    "background"
  ];

  handleKeypress(e) {
    if (e.ctrlKey && e.key === "k") {
      e.preventDefault();
      this.addSmartLink();
    }
  }

  addSmartLink() {
    // capture selected text
    let range = window.getSelection().getRangeAt(0);
    let selectedText = range.cloneContents().textContent;

    // capture existing link
    const editor = this.template.querySelector("lightning-input-rich-text");
    const currentFormat = editor.getFormat();
    const selectedLink = currentFormat.link;

    // find popup container, set values, and show dialog
    const smartLinkPopup = this.template.querySelector("c-smart-link-popup");
    smartLinkPopup.linkTitle = selectedText;
    smartLinkPopup.linkUrl = selectedLink;
    smartLinkPopup.showModal();
  }

  /**
   * If modal closed with X button, promise returns result = 'undefined'.
   * If modal closed with Save button, promise returns result = {linkTitle, linkUrl}.
   *
   * @param event
   */
  handleSmartLinkClose(event) {
    const result = event.detail;
    if (result) {
      const editor = this.template.querySelector("lightning-input-rich-text");
      // text must be set before applying formating
      // undefined, undefined - instructs to replace whole selection
      // select - instructs to replace whole selection
      editor.setRangeText(result.linkTitle, undefined, undefined, "select");
      editor.setFormat({ link: result.linkUrl });
    }
  }
}