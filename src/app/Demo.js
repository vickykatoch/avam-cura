import React, {Component} from 'react';
import LineChart from './LineChartAsync';
import {AppBar} from '../common/components/appbar/index';
import {ProgressBar} from '../common/components/progressbar/index';
import {Drawer} from '../common/components/drawer/index';
import {Button, IconButton} from '../common/components/button/index';
import {Checkbox} from '../common/components/checkbox/index';
import {Input} from '../common/components/input/index';
import {DatePicker} from '../common/components/datepicker/index';

const datetime = new Date(2015, 10, 16);
const min_datetime = new Date(new Date(datetime).setDate(8));
const max_datetime = new Date(new Date(datetime).setDate(24));
datetime.setHours(17);
datetime.setMinutes(28);

const localeExample = {
    months: 'urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua'.split('_'),
    monthsShort: 'urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.'.split('_'),
    weekdays: 'igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata'.split('_'),
    weekdaysShort: 'ig._al._ar._az._og._ol._lr.'.split('_'),
    weekdaysLetter: 'ig_al_ar_az_og_ol_lr'.split('_')
}

class Demo extends Component {

    constructor(props) {
        super(props);
        this.state = { showCharts: false, showDrawer: false, check1: false, check2: false };
        this.handleChange = this.handleChange.bind(this);
        this.toggleDrawer = this.toggleDrawer.bind(this);
        this.handleCheckChange = this.handleCheckChange.bind(this);
    }

    handleChange() {
        this.setState({
            showCharts: !this.state.showCharts
        });
    }
    handleCheckChange() {
        this.setState({
            check1: !this.state.check1,
            check2: !this.state.check2
        });
    }
    toggleDrawer() {
        this.setState({
            showDrawer: !this.state.showDrawer
        });
    }

    render() {
        let gutter = {
            marginTop: '20px'
        }
        
        const GithubIcon = () => (
            <svg viewBox="0 0 284 277">
                <g><path d="M141.888675,0.0234927555 C63.5359948,0.0234927555 0,63.5477395 0,141.912168 C0,204.6023 40.6554239,257.788232 97.0321356,276.549924 C104.12328,277.86336 106.726656,273.471926 106.726656,269.724287 C106.726656,266.340838 106.595077,255.16371 106.533987,243.307542 C67.0604204,251.890693 58.7310279,226.56652 58.7310279,226.56652 C52.2766299,210.166193 42.9768456,205.805304 42.9768456,205.805304 C30.1032937,196.998939 43.9472374,197.17986 43.9472374,197.17986 C58.1953153,198.180797 65.6976425,211.801527 65.6976425,211.801527 C78.35268,233.493192 98.8906827,227.222064 106.987463,223.596605 C108.260955,214.426049 111.938106,208.166669 115.995895,204.623447 C84.4804813,201.035582 51.3508808,188.869264 51.3508808,134.501475 C51.3508808,119.01045 56.8936274,106.353063 65.9701981,96.4165325 C64.4969882,92.842765 59.6403297,78.411417 67.3447241,58.8673023 C67.3447241,58.8673023 79.2596322,55.0538738 106.374213,73.4114319 C117.692318,70.2676443 129.83044,68.6910512 141.888675,68.63701 C153.94691,68.6910512 166.09443,70.2676443 177.433682,73.4114319 C204.515368,55.0538738 216.413829,58.8673023 216.413829,58.8673023 C224.13702,78.411417 219.278012,92.842765 217.804802,96.4165325 C226.902519,106.353063 232.407672,119.01045 232.407672,134.501475 C232.407672,188.998493 199.214632,200.997988 167.619331,204.510665 C172.708602,208.913848 177.243363,217.54869 177.243363,230.786433 C177.243363,249.771339 177.078889,265.050898 177.078889,269.724287 C177.078889,273.500121 179.632923,277.92445 186.825101,276.531127 C243.171268,257.748288 283.775,204.581154 283.775,141.912168 C283.775,63.5477395 220.248404,0.0234927555 141.888675,0.0234927555" /></g>
            </svg>
        );
        return (
            <div>
                <AppBar {...this.props}>
                    Application Bar Sample
                </AppBar>
                <div className="demo-header">
                    
                        
                    
                </div>
                <ProgressBar type='circular' mode='indeterminate' multicolor />
                <div style={gutter}>
                    <input type="checkbox" value={this.state.showDrawer} onChange={this.toggleDrawer} />
                    <Drawer active={this.state.showDrawer} onOverlayClick={this.toggleDrawer}>
                        <h5>This is your Drawer.</h5>
                        <p>You can embed any content you want, for example a Menu.</p>
                    </Drawer>
                </div>

                <div style={gutter}>
                    <Button href='http://github.com/javivelasco' target='_blank' raised>
                        <GithubIcon /> Github
                    </Button>
                    <Button icon='bookmark' label='Bookmark' accent /><br />
                    <Button icon='bookmark' label='Bookmark' raised primary /><br />
                    <Button icon='inbox' label='Inbox' flat /><br />
                    <Button icon='add' floating /><br />
                    <Button icon='add' floating accent mini /><br />
                    <IconButton icon='favorite' accent /><br />
                    <Button icon='add' label='Add this' flat primary /><br />
                    <Button icon='add' label='Add this' flat disabled /><br />
                    <IconButton primary><GithubIcon /></IconButton>
                </div>

                <div style={gutter}>
                    <Checkbox
                        checked={this.state.check1}
                        label="Checked option"
                        onChange={this.handleCheckChange}
                        />
                    <Checkbox
                        checked={this.state.check2}
                        label="Unchecked option"
                        onChange={this.handleCheckChange}
                        />
                    <Checkbox
                        checked
                        disabled
                        label="Disabled checkbox"
                        />
                </div>

                <section style={gutter}>
                    <Input type='text' label='Name' name='name' value={this.state.name} onChange={this.handleChange.bind(this, 'name') } maxLength={16} />
                    <Input type='text' label='Disabled field' disabled />
                    <Input type='text' multiline label='Multiline' maxLength={20} value={this.state.multiline} onChange={this.handleChange.bind(this, 'multiline') } />
                    <Input type='email' label='Email address' icon='email' value={this.state.email} onChange={this.handleChange.bind(this, 'email') } />
                    <Input type='tel' label='Phone' name='phone' icon='phone' value={this.state.phone} onChange={this.handleChange.bind(this, 'phone') } />
                    <Input type='text' value={this.state.hint} label='Required Field' hint='With Hint' required onChange={this.handleChange.bind(this, 'hint') } icon='share' />
                </section>


                <section style={gutter}>
                    <DatePicker
                        label='Birthdate'

                        sundayFirstDayOfWeek
                        />

                    <DatePicker
                        label='Locale (String) - Spanish'
                        locale='es'
                        onChange={this.handleChange.bind(this, 'date1') }
                        value={this.state.date1}
                        />

                    <DatePicker
                        label='Locale (Object) - Basque'
                        locale={localeExample}
                        onChange={this.handleChange.bind(this, 'date1') }
                        value={this.state.date1}
                        />

                    <DatePicker
                        label='Expiration date'
                        minDate={min_datetime}
                        onChange={this.handleChange.bind(this, 'date2') }
                        value={this.state.date2}
                        sundayFirstDayOfWeek
                        />

                    <DatePicker
                        label='Formatted Date'
                        autoOk
                        inputFormat={(value) => `${value.getDate()}/${value.getMonth() + 1}/${value.getFullYear()}`}
                        onChange={this.handleChange.bind(this, 'date3') }
                        value={this.state.date3}
                        sundayFirstDayOfWeek
                        />
                </section>


                <div style={gutter}>
                    Show charts:
                    <input type="checkbox" value={this.state.showCharts} onChange={this.handleChange} />
                    {
                        this.state.showCharts ? <div><LineChart/></div> : null
                    }
                </div>
            </div>
        );
    }
}
export default Demo;