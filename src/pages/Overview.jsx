
import * as React from 'react';

import { useLocalization } from '@progress/kendo-react-intl';
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";

import kendoka from '../assets/kendoka.png';
import github from '../assets/github-icon.svg';
import { products } from './../resources/products';
import { tippingPoints } from './../resources/tippingpoints';
import KendoPie from './../components/KendoPie';

const Overview = () => {
    const localizationService = useLocalization();
    return (
        <div id="Profile" className="profile-page main-content">
                <div className="card-container">
                    <div className="card-component">
                            
                        <h3 className="card-title">Overview (example)</h3>
                        <KendoPie data={[...tippingPoints]}/>
                        <KendoGrid/>
                    </div>
                </div>
        </div>
    );
}

const KendoGrid = () => {
    return (
      <Grid
        style={{
          height: "400px",
        }}
        data={[...tippingPoints]}
      >
        <Column field="title" title="Title" width="250px" />
        <Column field="category" title="Category" width="100px" />
        <Column field="description" title="Description" width="250px" />
        <Column field="awareness-score" title="Awareness Score" width="150px" />
        <Column
        field="resources"
        title="Resources"
        cell={(props) => { 
            console.log(props)
            // {props.dataItem?.resources?.length}
            const resources = props.dataItem.resources
            return (
          <td>
            {resources ? resources.length : 0}
            
          </td>
        )}}

      />
      </Grid>
    );
  };

export default Overview;

