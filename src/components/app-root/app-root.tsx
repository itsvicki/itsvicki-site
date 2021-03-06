import {Component, h} from "@stencil/core";

@Component({
  tag: "app-root",
  styleUrl: "app-root.css",
  shadow: true,
})
export class AppRoot {
  render() {
    return (
      <div>
        <comp-global-header></comp-global-header>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="app-home" exact={true} />
              <stencil-route url="/about" component="app-about" />
              <stencil-route
                url={["/thoughts", "/thoughts/"]}
                component="app-thoughts"
                exact={true}
              />
              <stencil-route url="/thoughts/:slug" component="app-thoughts" />
            </stencil-route-switch>
          </stencil-router>
        </main>

        <comp-global-footer></comp-global-footer>
      </div>
    );
  }
}
