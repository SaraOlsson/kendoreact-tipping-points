import * as React from 'react';
import { AppBar, AppBarSection, AppBarSpacer, Avatar } from '@progress/kendo-react-layout';
import { Badge, BadgeContainer } from '@progress/kendo-react-indicators';
let kendokaAvatar = 'https://www.telerik.com/kendo-react-ui-develop/images/kendoka-react.png';

const KendoAppBar = () => {
  return <React.Fragment>
        <AppBar>
          <AppBarSection>
            <button className="k-button k-button-clear">
              <span className="k-icon k-i-menu" />
            </button>
          </AppBarSection>

          <AppBarSpacer style={{
        width: 4
      }} />

          <AppBarSection>
            <h1 className="title">TippingPoint</h1>
          </AppBarSection>

          <AppBarSpacer style={{
        width: 32
      }} />

          <AppBarSection>
            <ul>
              <li><span>Tipping Points</span></li>
              <li><span>About</span></li>
              <li><span>Research</span></li>
              <li><span>Act</span></li>
            </ul>
          </AppBarSection>

          <AppBarSpacer />

          <AppBarSection className="actions">
            <button className="k-button k-button-clear">
              <BadgeContainer>
                <span className="k-icon k-i-bell" />
                <Badge shape="dot" themeColor="info" size="small" position="inside" />
              </BadgeContainer>
            </button>
          </AppBarSection>

          <AppBarSection>
            <span className="k-appbar-separator" />
          </AppBarSection>

          <AppBarSection>
            <Avatar shape="circle" type="image">
              <img src={kendokaAvatar} />
            </Avatar>
          </AppBarSection>
        </AppBar>
        <style>{`
                body {
                    // background: #dfdfdf;
                }
                .title {
                    font-size: 18px;
                    margin: 0;
                }
                ul {
                    font-size: 14px;
                    list-style-type: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                }
                li {
                    margin: 0 10px;
                }
                li:hover {
                    cursor: pointer;
                    color: #84cef1;
                }
                .k-button {
                    padding: 0;
                }
                .k-badge-container {
                    margin-right: 8px;
                }
            `}</style>
      </React.Fragment>;
};

export default KendoAppBar