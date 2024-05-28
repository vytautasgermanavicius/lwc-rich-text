/**
 * Created by Vytautas Germanavičius on 2024-05-21.
 */

import { LightningElement } from "lwc";
import { api } from "lwc";

export default class SmartLinkPopup extends LightningElement {
  /**
   * @type boolean
   */
  showPopup = false;

  @api
  showModal() {
    this.showPopup = true;
    setTimeout(() => {
      if (!this.result.linkTitle) {
        this.refs.linkTitle.focus();
      } else {
        this.refs.linkUrl.focus();
      }
    });
  }

  result = {
    linkTitle: "",
    linkUrl: ""
  };

  @api
  get linkTitle() {
    return this.result.linkTitle;
  };

  set linkTitle(value) {
    this.result.linkTitle = value;
  };

  @api
  get linkUrl() {
    return this.result.linkUrl;
  };

  set linkUrl(value) {
    this.result.linkUrl = value;
  };

  @api
  closeModal() {
    this.showPopup = false;
  }

  handleTitleChange(event) {
    this.result.linkTitle = event.target.value;
  }

  handleUrlChange(event) {
    this.result.linkUrl = event.target.value;
  }

  saveChanges() {
    this.dispatchEvent(
      new CustomEvent("savechanges", {
        detail: this.result
      })
    );
    this.showPopup = false;
  }

  handleKeypress(e) {
    if (e.key === "Escape") {
      e.preventDefault();
      this.closeModal();
    }
  }
}