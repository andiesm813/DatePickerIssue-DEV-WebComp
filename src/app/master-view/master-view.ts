import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { defineComponents, IgcAvatarComponent, IgcButtonComponent, IgcCardComponent, IgcIconButtonComponent, IgcIconComponent, IgcListComponent, IgcListItemComponent, IgcRippleComponent, IgcSelectComponent, IgcTabsComponent } from 'igniteui-webcomponents';
import MovieAppService from '../service/MovieApp-service';

defineComponents(IgcTabsComponent, IgcCardComponent, IgcButtonComponent, IgcRippleComponent, IgcIconButtonComponent, IgcIconComponent, IgcSelectComponent, IgcListComponent, IgcListItemComponent, IgcAvatarComponent);

@customElement('app-master-view')
export default class MasterView extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .group {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 24px;
      position: relative;
      padding: 32px;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 4;
      flex-basis: 0;
    }
    .row-layout {
      display: flex;
    }
    .group_1 {
      background-image: url("https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80");
      background-size: cover;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 320px;
    }
    .tabs {
      min-width: 0;
      min-height: 0;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_2 {
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 24px;
      overflow: auto;
      position: relative;
      padding: 24px 0 0;
      min-width: 100%;
      min-height: 50px;
    }
    .card {
      height: max-content;
      min-width: 320px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_3 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      overflow: auto;
      position: relative;
      min-width: 100%;
      min-height: 50px;
    }
    .group_4 {
      background-color: hsla(var(--ig-gray-100));
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 32px;
      position: relative;
      padding: 32px;
      min-width: 400px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_5 {
      background-color: hsla(var(--ig-surface-500));
      border-color: hsla(var(--ig-success-500));
      border-width: 4px 0px 0px;
      border-style: solid;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      padding: 24px 24px 32px;
      min-width: 50px;
      min-height: 50px;
    }
    .content {
      height: max-content;
      min-width: min-content;
    }
    .image {
      height: 100%;
    }
    .icon {
      font-size: 24px;
      width: 24px;
      height: 24px;
    }
    .avatar {
      --background: none;
      --ig-gray-400: transparent;
    }
    .avatar_1::part(base) {
      color: hsla(var(--ig-surface-500));
      background-color: hsla(var(--ig-success-500));
    }
    .avatar_2::part(base) {
      color: hsla(var(--ig-surface-500));
      background-color: hsla(var(--ig-primary-400));
    }
    .avatar_3::part(base) {
      color: hsla(var(--ig-surface-500));
      background-color: hsla(var(--ig-secondary-400));
    }
    .tab-item-content {
      padding: 24px 0 0;
      height: 100%;
      min-width: 100%;
      min-height: 50px;
    }
    .media-content {
      height: 180px;
    }
    .body-content {
      min-width: 50px;
      min-height: 50px;
    }
    .actions-content {
      min-width: 50px;
      min-height: 40px;
    }
    .tab-item-content_1 {
      height: 100%;
      min-width: 100%;
      min-height: 50px;
    }
    .user-input {
      height: max-content;
      min-width: min-content;
    }
    .date-picker {
      height: max-content;
      min-width: 120px;
    }
    .user-input_1::part(base) {
      color: hsla(var(--ig-surface-500));
      background-color: hsla(var(--ig-primary-500));
    }
    .user-input_2::part(base) {
      color: hsla(var(--ig-surface-500));
      background-color: hsla(var(--ig-primary-500));
    }
    .list {
      height: max-content;
    }
  `;

  constructor() {
    super();
    this.movieAppService.getNowPlaying().then((data) => {
      this.movieAppNowPlaying = data;
    }, err => console.log(err));
  }

  private movieAppService: MovieAppService = new MovieAppService();

  @property()
  private movieAppNowPlaying?: any[];

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="column-layout group">
        <h5 class="content">
          Movie Premieres
        </h5>
        <div class="row-layout group_1"></div>
        <igc-tabs class="tabs">
          <igc-tab ?selected="${true}">
            Now playing
          </igc-tab>
          <igc-tab-panel class="tab-item-content">
            <div class="row-layout group_2">
              ${this.movieAppNowPlaying?.map((item: any) => html`
                <igc-card class="card">
                  <igc-card-media class="media-content">
                    <img src="${item.MoviePoster}" class="image" />
                  </igc-card-media>
                  <igc-card-header>
                    <h3 slot="title">
                      ${item.Name}
                    </h3>
                    <h5 slot="subtitle">
                      ${item.Genre}
                    </h5>
                  </igc-card-header>
                  <igc-card-content class="body-content">
                    <p class="typography__body-2 content">
                      ${item.Description}
                    </p>
                  </igc-card-content>
                  <igc-card-actions class="actions-content">
                    <igc-button variant="flat" class="user-input">
                      Button
                      <igc-ripple></igc-ripple>
                    </igc-button>
                    <igc-icon-button variant="flat">
                      <span class="material-icons">
                        favorite
                      </span>
                      <igc-ripple></igc-ripple>
                    </igc-icon-button>
                    <igc-icon-button variant="flat">
                      <span class="material-icons">
                        bookmark
                      </span>
                      <igc-ripple></igc-ripple>
                    </igc-icon-button>
                    <igc-icon-button variant="flat">
                      <span class="material-icons">
                        share
                      </span>
                      <igc-ripple></igc-ripple>
                    </igc-icon-button>
                  </igc-card-actions>
                </igc-card>
              `)}
            </div>
          </igc-tab-panel>
          <igc-tab ?disabled="${true}">
            Coming Soon
          </igc-tab>
          <igc-tab-panel class="tab-item-content_1">
            <div class="row-layout group_3"></div>
          </igc-tab-panel>
        </igc-tabs>
      </div>
      <div class="column-layout group_4">
        <div class="column-layout group_5">
          <p class="typography__subtitle-2 content">
            BUY TICKETS
          </p>
          <igc-select ?outlined="${true}" label="Label/Placeholder" class="user-input">
            <span slot="prefix">
              <span class="material-icons icon">
                movie
              </span>
            </span>
            <igc-select-item value="Option">
              Option
            </igc-select-item>
          </igc-select>
          <igc-select ?outlined="${true}" label="Label/Placeholder" class="user-input">
            <span slot="prefix">
              <span class="material-icons icon">
                location_on
              </span>
            </span>
            <igc-select-item value="Option">
              Option
            </igc-select-item>
          </igc-select>
          <span class="date-picker">DatePicker not yet available in WebComponents</span>
          <igc-select ?outlined="${true}" label="Label/Placeholder" class="user-input">
            <span slot="prefix">
              <span class="material-icons icon">
                access_time
              </span>
            </span>
            <igc-select-item value="Option">
              Option
            </igc-select-item>
          </igc-select>
          <igc-button class="user-input user-input_1">
            Buy Tickets
            <igc-ripple></igc-ripple>
          </igc-button>
        </div>
        <div class="column-layout group_5">
          <p class="typography__subtitle-2 content">
            THEATRES NEAR YOU
          </p>
          <igc-list class="list">
            <igc-list-item>
              <div slot="start">
                <igc-avatar initials="AB" size="small" shape="circle" class="avatar avatar_1"></igc-avatar>
              </div>
              <div slot="title">Movie Theatre Name</div>
              <div slot="subtitle">Location</div>
            </igc-list-item>
            <igc-list-item>
              <div slot="start">
                <igc-avatar initials="AB" size="small" shape="circle" class="avatar avatar_2"></igc-avatar>
              </div>
              <div slot="title">Movie Theatre Name</div>
              <div slot="subtitle">Location</div>
            </igc-list-item>
            <igc-list-item>
              <div slot="start">
                <igc-avatar initials="AB" size="small" shape="circle" class="avatar avatar_3"></igc-avatar>
              </div>
              <div slot="title">Movie Theatre Name</div>
              <div slot="subtitle">Location</div>
            </igc-list-item>
          </igc-list>
          <igc-button class="user-input user-input_2">
            CHANGE LOCATION
            <igc-ripple></igc-ripple>
          </igc-button>
        </div>
      </div>
    `;
  }
}
