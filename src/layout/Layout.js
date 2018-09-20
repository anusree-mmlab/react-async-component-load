import React, { Component } from 'react';
import classes from './Layout.css';
import asyncComponent from '../hoc/AsyncComponent';


const LazyDynamicComponents = (props) => {
    const menu = props.menu;
    switch (menu) {
        case 'branches':
            const BranchCm = asyncComponent(() => {
                return import('../components/branches/Branches')
            });
            return (<BranchCm></BranchCm>);

        case 'areas': const AreaCm = asyncComponent(() => {
            return import('../components/areas/Areas')
        });
            return (<AreaCm></AreaCm>);

        case 'components': const ComponentCm = asyncComponent(() => {
            return import('../components/comps/Comps')
        });
            return (<ComponentCm></ComponentCm>);

        case 'squads': const SquadCm = asyncComponent(() => {
            return import('../components/squads/Squads')
        });
            return (<SquadCm></SquadCm>);

        case 'owners': const OwnerCm = asyncComponent(() => {
            return import('../components/owners/Owners')
        });
            return (<OwnerCm></OwnerCm>);

        default: const DefaultCom = asyncComponent(() => {
            return import('../components/branches/Branches')
        });
            return (<DefaultCom></DefaultCom>);

    }
}

class Layout extends Component {
    state = {
        currentMenu: 'branches'
    }

    constructor(props) {
        super();
    }

    onMenuClickHandler(menu) {
        this.setState({ currentMenu: menu });
    }

    render() {
        const innerCompnent = (<LazyDynamicComponents menu={this.state.currentMenu}></LazyDynamicComponents>);

        return (
            <div className={classes.layoutMain}>
                <h1>Test App</h1>

                <div className={classes.lContainer}>
                    <div className={classes.leftPane}>
                        <ul>
                            <li onClick={(e) => this.onMenuClickHandler('branches')}>Branches</li>
                            <li onClick={(e) => this.onMenuClickHandler('areas')}>Areas</li>
                            <li onClick={(e) => this.onMenuClickHandler('squads')}>Squads</li>
                            <li onClick={(e) => this.onMenuClickHandler('owners')}>Owners</li>
                            <li onClick={(e) => this.onMenuClickHandler('components')}>Components</li>
                        </ul>
                    </div>
                    <div className={classes.rightPane}>
                        {innerCompnent}
                    </div>
                </div>
                <main>
                    {this.props.children}
                </main>
            </div>
        );
    }
}

export default Layout;