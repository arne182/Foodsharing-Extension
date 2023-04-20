// ==UserScript==
// @name         Foodsharing Extension
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  Copies and modifies elements from foodsharing.de/* websites
// @author       Arne Schwarck
// @match        https://foodsharing.de/*
// @match        https://foodsharing.network/*
// @match        https://foodsharing.at/*
// @grant        none
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// ==/UserScript==


(function() {
    'use strict';

    console.log('content.js is loaded and running');

  async function injectCustomCSS() {
    const css = `table.timetable {
    width: 100%;
}

table.timetable td {
    height: 20px;
    vertical-align: middle;
}

table.timetable select.nft-dow {
    width: 10rem;
}

table.timetable select.nfttime-hour, table.timetable select.nfttime-min {
    width: 5rem;
}

table.timetable input.fetchercount {
    width: 5rem;
}

table.timetable button.nft-remove {
    float: right;
    height: 30px;
}

table.timetable button.nft-remove .ui-icon {
    transform: scale(1.25);
}

.slotstatus[data-v-20f38824] {
    position: absolute;
    top: -2px;
    right: -2px;
    height: 1.5rem;
    width: 1.5rem;
    z-index: 3;
    border-radius: 50%;
    background-color: var(--fs-color-light)
}

.slotstatus.pending[data-v-20f38824] {
    color: var(--fs-color-danger-500)
}

.slotstatus.confirmed[data-v-20f38824] {
    color: var(--fs-color-secondary-500)
}

.slotstatus .slotstatus-icon[data-v-20f38824] {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1rem
}

.avatar.pending[data-v-20f38824] {
    opacity: .45
}

.empty-slot[data-v-66a83791] {
    display: inline-block
}

.pickup[data-v-40605be8] {
    position: relative
}

.pickup-date[data-v-40605be8] {
    padding-bottom: 5px;
    font-size: .875rem
}

.pickup-date.today[data-v-40605be8]:not(.past) {
    font-weight: bolder
}

.pickup-date.coord.soon.empty[data-v-40605be8]::after {
    float: right;
    margin-right: -5px;
    text-align: right;
    content: "";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    color: var(--fs-color-warning-500)
}

.pickup-date.coord.soon.empty.today[data-v-40605be8]::after {
    color: var(--fs-color-danger-500)
}

.pickup-date.coord.past[data-v-40605be8]::after {
    content: "" !important
}

.pickup-block:not(:last-of-type) .pickup-text[data-v-40605be8] {
    margin-bottom: .5rem;
    padding-bottom: .5rem;
    border-bottom: 1px solid var(--fs-border-default)
}

.pickup .store-title[data-v-40605be8] {
    display: none
}

.pickup .pickup-title[data-v-40605be8],.pickup .store-title[data-v-40605be8] {
    font-size: inherit
}

.pickup .pickup-text[data-v-40605be8] {
    margin-left: -10px;
    margin-right: -10px;
    padding-left: 10px;
    padding-right: 10px
}

.pickup ul.slots[data-v-40605be8] {
    display: flex;
    padding: 0;
    margin: 0 0 5px;
    flex-wrap: wrap
}

.pickup ul.slots div[data-v-40605be8] {
    display: inline-block
}

.pickup ul.slots[data-v-40605be8] .btn {
    display: inline-block;
    margin: 2px;
    margin-left: 1px;
    width: 90px;
    height: 50px;
    color: var(--fs-color-primary-400);
    background-color: var(--fs-color-primary-100);
    border: 2px solid var(--fs-color-primary-300)
}

.pickup ul.slots[data-v-40605be8] .btn:hover {
    border-color: var(--fs-color-primary-500)
}

.pickup ul.slots[data-v-40605be8] .btn:focus {
    box-shadow: none
}

.pickup ul.slots[data-v-40605be8] .btn.filled {
    overflow: hidden
}

.pickup ul.slots[data-v-40605be8] .btn.btn-primary {
    background-color: var(--fs-color-primary-300)
}

.pickup ul.slots[data-v-40605be8] .btn[disabled] {
    opacity: 1
}

.pickup ul.slots[data-v-40605be8] .btn[disabled]:hover {
    border-color: var(--fs-color-primary-300);
    cursor: default
}

.pickup .delete-pickup[data-v-40605be8] {
    display: none;
    position: absolute;
    top: -4px;
    right: -9px;
    color: var(--fs-color-primary-500);
    background-color: var(--fs-color-light);
    opacity: .9
}

.pickup .delete-pickup .btn[data-v-40605be8] {
    padding: 3px 5px;
    line-height: 1.38
}

.pickup:hover .delete-pickup[data-v-40605be8] {
    display: block
}

.pickup .soon .delete-pickup[data-v-40605be8] {
    right: 1px
}

.modal-dialog blockquote[data-v-40605be8] {
    margin: 0;
    padding-left: .5rem;
    border-left: 3px solid var(--fs-color-info-200)
}

.modal-dialog blockquote div[data-v-40605be8] {
    margin: .25rem
}

.modal-dialog blockquote textarea[wrap=soft][data-v-40605be8] {
    overflow-y: auto !important
}

.pickup-history[data-v-772748c3] {
    background: var(--fs-color-light)
}

.pickup-history[data-v-772748c3] .form-inline .form-control.b-calendar-grid {
    width: 100%
}

.pickup-history .date-separator[data-v-772748c3] {
    border-top-color: var(--fs-border-default)
}

.pickup-history .date-separator[data-v-772748c3]::after {
    content: "->";
    visibility: hidden
}

.pickup-list[data-v-0cd3a838] {
    padding: 10px
}

.pickup-list .pickup-block[data-v-0cd3a838]:last-child {
    margin-bottom: -10px
}

.btn-group.slot-actions[data-v-0cd3a838] {
    margin: -6px -8px
}

.btn-group.slot-actions button[data-v-0cd3a838] {
    line-height: 21px;
    padding: 5px 10px;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px
}

.btn-group.slot-actions i.fas[data-v-0cd3a838] {
    font-size: 14px
}

.posts .post[data-v-9ca69caa] {
    --storewall-padding: 0.4rem;
    vertical-align: top;
    padding: calc(2*var(--storewall-padding)) var(--storewall-padding);
    position: relative;
    border-top: 1px solid var(--fs-border-default)
}

.posts .post .member-pic[data-v-9ca69caa] img {
    width: 50px;
    height: 50px
}

.posts .post .metadata[data-v-9ca69caa] {
    margin-top: calc(-1*var(--storewall-padding));
    margin-bottom: calc(var(--storewall-padding)/2);
    font-size: smaller;
    color: var(--fs-color-dark)
}

.posts .post .metadata .author.with-padding[data-v-9ca69caa] {
    padding-left: calc(50px + .25rem)
}

.posts .post .metadata .author.with-padding .is-manager[data-v-9ca69caa] {
    margin-left: -2.5em
}

.posts .post .metadata .author a[data-v-9ca69caa] {
    color: var(--fs-color-secondary-500)
}

.posts .post .metadata .author .is-manager[data-v-9ca69caa] {
    color: var(--fs-color-warning-alpha-70);
    font-size: .75rem;
    transform: scale(0.75);
    margin-left: 0
}

.posts .post .moderation[data-v-9ca69caa] {
    position: absolute;
    bottom: 0;
    right: 0
}

.posts .post .moderation .delete[data-v-9ca69caa]:hover {
    color: var(--fs-color-danger-500) !important
}

.modal .alert[data-v-9ca69caa] {
    margin-bottom: 0;
    font-size: .9rem
}

.modal .alert hr[data-v-9ca69caa] {
    margin-top: .5rem;
    margin-bottom: .5rem
}

.modal .excerpt[data-v-9ca69caa] {
    max-height: calc(50vh - 1rem);
    overflow-y: auto;
    margin: .5rem;
    margin-left: 0;
    padding-left: .5rem;
    border-left: 3px solid var(--fs-border-default)
}

.content .msg[data-v-9ca69caa],.modal .msg[data-v-9ca69caa] {
    overflow: hidden;
    overflow-wrap: break-word;
    word-break: break-word;
    font-size: .9rem
}

.content .msg div[data-v-9ca69caa],.content .msg[data-v-9ca69caa] p,.content .msg[data-v-9ca69caa] ul,.content .msg[data-v-9ca69caa] ol,.modal .msg div[data-v-9ca69caa],.modal .msg[data-v-9ca69caa] p,.modal .msg[data-v-9ca69caa] ul,.modal .msg[data-v-9ca69caa] ol {
    font-size: inherit
}

.content .msg[data-v-9ca69caa] p,.content .msg[data-v-9ca69caa] ol,.content .msg[data-v-9ca69caa] ul,.modal .msg[data-v-9ca69caa] p,.modal .msg[data-v-9ca69caa] ol,.modal .msg[data-v-9ca69caa] ul {
    margin-top: .5rem;
    margin-bottom: .5rem
}

.content .msg[data-v-9ca69caa] p:first-child,.content .msg[data-v-9ca69caa] ol:first-child,.content .msg[data-v-9ca69caa] ul:first-child,.modal .msg[data-v-9ca69caa] p:first-child,.modal .msg[data-v-9ca69caa] ol:first-child,.modal .msg[data-v-9ca69caa] ul:first-child {
    margin-top: 0
}

.content .msg[data-v-9ca69caa] p:last-child,.content .msg[data-v-9ca69caa] ol:last-child,.content .msg[data-v-9ca69caa] ul:last-child,.modal .msg[data-v-9ca69caa] p:last-child,.modal .msg[data-v-9ca69caa] ol:last-child,.modal .msg[data-v-9ca69caa] ul:last-child {
    margin-bottom: 0
}

.content .msg[data-v-9ca69caa] ol,.content .msg[data-v-9ca69caa] ul,.modal .msg[data-v-9ca69caa] ol,.modal .msg[data-v-9ca69caa] ul {
    margin-left: 1.5rem
}

.content .msg[data-v-9ca69caa] blockquote,.modal .msg[data-v-9ca69caa] blockquote {
    border-left: 3px solid var(--fs-border-default);
    padding-left: 1rem;
    padding-top: .5rem;
    padding-bottom: .5rem
}

.content .msg[data-v-9ca69caa] pre,.modal .msg[data-v-9ca69caa] pre {
    background: none
}

.newpost textarea#newpost[data-v-4a37e585] {
    overflow-y: auto !important
}

ul.posts[data-v-4a37e585] {
    margin: 0
}

ul.posts.has-more-posts[data-v-4a37e585] {
    -webkit-mask-image: linear-gradient(to bottom, black 65%, var(--fs-color-transparent) 100%);
    mask-image: linear-gradient(to bottom, black 65%, var(--fs-color-transparent) 100%)
}

.request-actions .btn[data-v-4abd75b6] {
    white-space: unset
}

.member-pic[data-v-4abd75b6] img {
    width: 50px
}

.name a[data-v-4abd75b6] {
    color: var(--fs-color-secondary-500);
    font-size: .875rem
}

.store-desc[data-v-675aaa1c] {
    display: inline-block;
    font-size: .875rem
}

.store-desc div[data-v-675aaa1c],.store-desc p[data-v-675aaa1c],.store-desc ul[data-v-675aaa1c],.store-desc ol[data-v-675aaa1c],.store-desc th[data-v-675aaa1c],.store-desc td[data-v-675aaa1c],.store-desc label[data-v-675aaa1c] {
    font-size: inherit
}

.store-desc .desc-block[data-v-675aaa1c] {
    max-width: 100%;
    overflow-wrap: break-word;
    word-break: break-word;
    overflow-wrap: anywhere
}

.store-desc .desc-block[data-v-675aaa1c] .markdown div,.store-desc .desc-block[data-v-675aaa1c] .markdown ul,.store-desc .desc-block[data-v-675aaa1c] .markdown ol,.store-desc .desc-block[data-v-675aaa1c] .markdown th,.store-desc .desc-block[data-v-675aaa1c] .markdown td,.store-desc .desc-block[data-v-675aaa1c] .markdown label {
    margin-bottom: 0;
    font-size: inherit
}

.store-desc .desc-block-title[data-v-675aaa1c] {
    background-color: var(--fs-color-info-200);
    border-radius: var(--border-radius);
    color: var(--fs-color-info-600);
    font-weight: bolder;
    text-align: center
}

.vue-simple-suggest[data-v-be2b1572] .input-wrapper {
    border: 0;
    padding: 0
}

.vue-simple-suggest[data-v-be2b1572] .suggestions {
    z-index: 1000;
    margin: 0
}

.vue-simple-suggest[data-v-be2b1572] .suggest-item {
    display: inline-block;
    line-height: 1;
    max-width: 100%;
    text-overflow: ellipsis
}

.vue-simple-suggest[data-v-be2b1572] .suggest-item.hover {
    border: 1px solid var(--fs-color-secondary-500);
    background-color: var(--fs-color-secondary-500);
    color: #fff
}

.vue-simple-suggest.focus[data-v-be2b1572] {
    background-color: #fff !important;
    border: 0
}

.vue-simple-suggest-enter-active.suggestions[data-v-be2b1572],.vue-simple-suggest-leave-active.suggestions[data-v-be2b1572] {
    transition: opacity .2s
}

.vue-simple-suggest-enter.suggestions[data-v-be2b1572],.vue-simple-suggest-leave-to.suggestions[data-v-be2b1572] {
    opacity: 0 !important
}

.team-ava .member-pic[data-v-689ed5bc] img {
    width: 50px
}

.team-ava[data-v-689ed5bc] {
    --fetchcount-bg: var(--fs-color-primary-200);
    --fetchcount-fg: var(--fs-color-primary-500);
    --fetchcount-border: var(--fs-color-primary-500)
}

a[data-v-689ed5bc] {
    display: inline-block
}

.member-pic.jumper[data-v-689ed5bc] {
    opacity: .5
}

.member-fetchcount[data-v-689ed5bc] {
    position: absolute;
    top: 30px;
    right: -5px;
    min-width: 1.5rem;
    border: 1px solid var(--fs-border-default);
    background-color: var(--fs-color-primary-300);
    color: var(--fs-color-primary-500)
}

.member-fetchcount.maysm[data-v-689ed5bc] {
    color: var(--fs-color-light);
    background-color: var(--fs-color-role-storemanager);
    border-color: var(--fs-color-role-storemanager)
}

.member-fetchcount.waiting[data-v-689ed5bc] {
    color: var(--fs-color-light);
    background-color: var(--fs-color-role-jumper);
    border-color: var(--fs-color-role-jumper)
}

.member-info[data-v-2c7da834] {
    display: flex;
    min-height: 50px;
    padding-left: 10px;
    flex-direction: column;
    justify-content: center;
    font-size: smaller;
    color: var(--fs-color-dark)
}

.member-info[data-v-2c7da834]:hover,.member-info[data-v-2c7da834]:focus {
    text-decoration: none;
    outline-color: var(--fs-color-primary-500)
}

.member-info .member-name[data-v-2c7da834] {
    padding-left: 1px;
    min-width: 0;
    word-break: break-word;
    font-weight: bolder
}

.infowrapper[data-v-26441015] {
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center
}

.infowrapper.mh-50px[data-v-26441015] {
    min-height: 50px
}

.infowrapper div[data-v-26441015] {
    font-size: smaller
}

.store-team .team-management[data-v-5130f0c1] {
    border-bottom: 2px solid var(--fs-color-warning-500)
}

.store-team .team-list[data-v-5130f0c1] {
    padding: 0
}

.store-team[data-v-5130f0c1] table {
    display: flex;
    flex-direction: row;
    margin-bottom: 0
}

.store-team[data-v-5130f0c1] table thead,.store-team[data-v-5130f0c1] table tbody {
    width: 100%
}

.store-team[data-v-5130f0c1] table thead tr,.store-team[data-v-5130f0c1] table tbody tr {
    display: flex;
    border-bottom: 1px solid var(--fs-border-default)
}

.store-team[data-v-5130f0c1] table thead tr.b-table-details,.store-team[data-v-5130f0c1] table tbody tr.b-table-details {
    justify-content: center
}

.store-team[data-v-5130f0c1] table thead tr.table-warning,.store-team[data-v-5130f0c1] table tbody tr.table-warning {
    border-bottom-width: 2px;
    border-bottom-color: var(--fs-color-warning-500);
    padding-bottom: 1px
}

.store-team[data-v-5130f0c1] table thead tr:last-child,.store-team[data-v-5130f0c1] table thead tr.b-table-has-details,.store-team[data-v-5130f0c1] table tbody tr:last-child,.store-team[data-v-5130f0c1] table tbody tr.b-table-has-details {
    border-bottom-width: 0
}

.store-team[data-v-5130f0c1] table thead tr td,.store-team[data-v-5130f0c1] table tbody tr td {
    border-top: 0
}

.store-team[data-v-5130f0c1] table tr td {
    padding: 3px;
    border-top-color: var(--fs-border-default);
    vertical-align: middle;
    cursor: default;
    display: inline-block
}

.store-team[data-v-5130f0c1] table tr td.col-actions {
    padding: 0
}

.store-team[data-v-5130f0c1] table tr td.col-ava {
    position: relative;
    align-self: center
}

.store-team[data-v-5130f0c1] table tr td.col-info {
    flex-grow: 1
}

.store-team[data-v-5130f0c1] table tr td.col-mobinfo {
    padding: 0 10px;
    text-align: right
}

.store-team[data-v-5130f0c1] table tr td.col-call .member-call {
    padding: 10px;
    align-self: center;
    color: var(--fs-color-secondary-500)
}

.store-team[data-v-5130f0c1] table tr td.col-call .member-call.copy-clipboard {
    opacity: .7
}

.store-team[data-v-5130f0c1] table tr td.col-call .member-call:hover {
    background-color: var(--fs-color-secondary-500);
    color: var(--fs-color-light)
}

.store-team[data-v-5130f0c1] table tr td.col-call .member-call:focus {
    outline: 2px solid var(--fs-color-secondary-500)
}

.store-team[data-v-5130f0c1] table tr td.col-call .member-call:disabled {
    color: var(--fs-color-primary-300)
}

.store-team[data-v-5130f0c1] table tr td .member-actions {
    padding: 5px 0
}

.store-team[data-v-5130f0c1] table tr td .member-actions .btn {
    margin-bottom: 5px
}

.list-group-item[data-v-3a3a0d68]:not(:last-child) {
    border-bottom: 0
}

/*# sourceMappingURL=39.e4e777dd121bb8acefd6.css.map*/
`;
        const style = document.createElement('style');
        style.textContent = css;
        document.head.appendChild(style);
}

function copyMemberFetchCount() {
  console.log('copyMemberFetchCount called');
  const avatarElements = document.querySelectorAll('.avatar img[alt="Profilbild"], .avatar img[alt="Profile picture"], .avatar img[alt="photo de profil"], .avatar img[alt="foto del profilo"], .avatar img[alt="Profilbilde"]');
  const fetchCountMap = {}; // Create a map to store the count for each member

  avatarElements.forEach((avatarElement) => {
    const avatarSrc = avatarElement.getAttribute('src');
    const matchingTeamAvatar = document.querySelector(`.team-ava img[src="${avatarSrc}"]`);

    if (matchingTeamAvatar) {
      const memberFetchCountElement = matchingTeamAvatar.closest('.team-ava').querySelector('.member-fetchcount');

      if (memberFetchCountElement) {
        const fetchCount = parseInt(memberFetchCountElement.querySelector('span[data-v-689ed5bc]').textContent, 10);
        const parentPickupList = avatarElement.closest('.pickup-list.card-body');

        if (parentPickupList) {
          if (fetchCountMap[avatarSrc]) {
            fetchCountMap[avatarSrc]++;
          } else {
            fetchCountMap[avatarSrc] = 1;
          }
        }

        const updatedFetchCount = fetchCountMap[avatarSrc] > 1 ? `${fetchCount};${fetchCountMap[avatarSrc]}` : fetchCount;

        const clonedMemberFetchCount = memberFetchCountElement.cloneNode(true);
        clonedMemberFetchCount.querySelector('span[data-v-689ed5bc]').textContent = updatedFetchCount;

        const buttonElement = avatarElement.closest('button');

        if (buttonElement) {
          console.log('Appending clonedMemberFetchCount to buttonElement:', buttonElement);
          buttonElement.appendChild(clonedMemberFetchCount);
        } else {
          console.log('buttonElement not found for avatarElement:', avatarElement);
        }
      } else {
        console.log('memberFetchCountElement not found for matchingTeamAvatar:', matchingTeamAvatar);
      }
    } else {
      console.log('matchingTeamAvatar not found for avatarSrc:', avatarSrc);
    }
  });
}

injectCustomCSS();

function onContentLoaded() {
  console.log("Foodsharing-Extension Loaded");
  const waitForPickupBlocksInterval = setInterval(() => {
    const pickupBlocks = document.querySelectorAll(".pickup-block");
    if (pickupBlocks.length > 0) {
      clearInterval(waitForPickupBlocksInterval);
      copyMemberFetchCount();
    }
  }, 500);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", onContentLoaded);
} else {
  onContentLoaded();
}

})();