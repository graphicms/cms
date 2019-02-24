import React from "react";
import { WidthProvider, Responsive } from "react-grid-layout";

const ResponsiveReactGridLayout = WidthProvider(Responsive);
const originalLayouts = getFromLS("layouts") || {};
const originalLayout = getFromLS("layout", 'll') || [];
const originalItems = getFromLS("items", 'items') || [];

/**
 * This layout demonstrates how to sync multiple responsive layouts to localstorage.
 */
class ResponsiveLocalStorageLayout extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      items: JSON.parse(JSON.stringify(originalItems)),
      layouts: JSON.parse(JSON.stringify(originalLayouts)),
      layout: JSON.parse(JSON.stringify(originalLayout)),
      editable: true,
    };
  }

  static get defaultProps() {
    return {
      className: "layout",
      cols: {lg: 12, md: 10, sm: 6, xs: 4, xxs: 2},
      rowHeight: 30
    };
  }

  resetLayout() {
    this.setState({ layouts: {} });
  }

  onLayoutChange(layout, layouts) {
    saveToLS("layouts", layouts);
    saveToLS("layout", layout, 'll');
    saveToLS("items", this.state.items, 'items');
    this.props.handler(layout, layouts)
    this.setState({ layouts, layout });
  }

  deleteItem = (key) => {
    let i = [...this.state.items]
    i.splice(key, 1)
    this.setState({items: i})
    this.onLayoutChange(this.state.layout, this.state.layouts)
  }

  renderItem = (nr, key) => {
    let layouts = this.state.layout || [];
    let layout = { w: 6, h: 3, x: 0, y: 0, minW: 2, minH: 3 };
    let saved = { }
    Object.values(this.state.layouts).forEach((item, key) => {
      let breakpoint = Object.keys(this.state.layouts)[key];
      item.forEach(subitem => {
        if(subitem.i == nr) {
          saved[breakpoint] = item;
        }
      })
    })
    let l = [];
    if(Object.values(saved).length > 0 ) {
      if(saved.lg) {
        l = saved.lg;
      }
      else if(saved.md) {
        l = saved.md;
      }
      else if(saved.sm) {
        l = saved.sm;
      }
      else if(saved.xs) {
        l = saved.xs;
      }
      else if(saved.xxs) {
        l = saved.xxs;
      }
    }
    console.log('this savd', layout)
    layouts.forEach(l => {
      console.log('l', l, nr)
      if(l.i == nr) {
        layout = l;
        return false;
      }
    })
    return (
      <div key={nr} data-grid={layout}>
        <div className="max-w-full h-full rounded overflow-hidden shadow-lg">
          <div style={{height: '50%', backgroundSize:'cover', backgroundImage: 'url(https://tailwindcss.com/img/card-top.jpg)'}}>

          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2" onClick={() => this.deleteItem(key)}>The Coldest Sunset {nr}</div>
            <p className="text-grey-darker text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
              perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 py-4">
                  <span
                    className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#photography</span>
            <span
              className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#travel</span>
            <span
              className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">#winter</span>
          </div>
        </div>
      </div>
    )
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <button onClick={() => this.resetLayout()}>Reset Layout</button>
        <button onClick={() => {
          this.setState({items: [...this.state.items, {k: 1}]})
        }} className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded">
          add
        </button>
        <button onClick={() => this.setState({editable: !this.state.editable})} className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded">
          Edit
        </button>
        <ResponsiveReactGridLayout
          className="layout"
          compactType={'vertical'}
          isDraggable={this.state.editable}
          isResizable={this.state.editable}
          cols={{lg: 12, md: 12, sm: 6, xs: 6, xxs: 1}}
          breakpoints={{lg: 1000, md: 800, sm: 568, xs: 280, xxs: 0}}
          rowHeight={30}
          layouts={this.state.layouts}
          onLayoutChange={(layout, layouts) =>
            this.onLayoutChange(layout, layouts)
          }
        >
          {this.state.items.map((item, key) => {
            return this.renderItem(`w-${key}`, key)
          })}
        </ResponsiveReactGridLayout>
      </div>
    );
  }
}

export {
  ResponsiveLocalStorageLayout as Test
}

function getFromLS(key, storage = 'ex') {
  let ls = {};
  if (global.localStorage) {
    try {
      ls = JSON.parse(global.localStorage.getItem(storage)) || {};
    } catch (e) {
      /*Ignore*/
    }
  }
  return ls[key];
}

function saveToLS(key, value, storage = 'ex') {
  if (global.localStorage) {
    global.localStorage.setItem(
      storage,
      JSON.stringify({
        [key]: value
      })
    );
  }
}