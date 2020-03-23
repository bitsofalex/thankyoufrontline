import * as React from 'react';
import {Box, Button, Heading, Text, TextField} from 'gestalt';
import {Vertical, VerticalSpacer} from 'gls';

const HeadingContent = () =>
    <Box display={'flex'} direction={'column'} alignItems={'center'}>
        <Heading size="sm">Create Profile</Heading>
        <VerticalSpacer space={12}/>
        <Text align={'center'}>We only currently support AHPRA registered employees</Text>
    </Box>;

export class UserSignupPage extends React.Component {

    render() {
        return <div style={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>

            <div>
                <HeadingContent/>
                <VerticalSpacer space={32}/>

                <Vertical>
                    <TextField
                        label="First name"
                        onChange={() => {
                        }}
                        id="first-name"/>
                    <TextField
                        label="Last name"
                        onChange={() => {
                        }}
                        id="last-name"/>
                    <TextField
                        label="AHPRA registration number"
                        onChange={() => {
                        }}
                        id="registration-number"
                    />
                    <TextField
                        label="Mobile number"
                        onChange={() => {
                        }}
                        id="mobile-number"
                    />
                </Vertical>

                <VerticalSpacer space={32}/>

                <Vertical>
                    <Button color={'red'} text="Register"/>
                    <Text size={'sm'} align={'center'}>Already have an account?</Text>
                </Vertical>

            </div>
        </div>;
    }

}
