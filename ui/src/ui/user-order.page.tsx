import * as React from 'react';
import {Badge, Button, Card, Divider, Heading, Icon, Sticky, Text} from 'gestalt';
import {HorizontalSpacer, Vertical, VerticalSpacer} from 'gls';

export class UserOrderPage extends React.Component {

    render() {
        return <>
            <div>
                <div style={{ display: 'flex' }}>
                    <Icon icon="menu" accessibilityLabel="Menu" color="darkGray"/>
                    <div style={{ flexGrow: 1, marginLeft: 16 }}>
                        <Card active>
                            <Heading size={'sm'}>
                                My Orders
                            </Heading>
                        </Card>
                    </div>
                </div>
                <VerticalSpacer space={6}/>

                <VerticalSpacer/>

                <Vertical spacing={8}>
                    <Text size={'md'} weight={'bold'}>Grocery</Text>
                    <Text size={'sm'}>Toilet Paper, Hand sanitiser, Meat (Beef), Pasta, Pasta Sauce</Text>
                    <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
                        <Badge text="Pending"/>
                    </div>
                    <Divider/>
                </Vertical>

                <VerticalSpacer/>
                <Vertical spacing={8}>
                    <Text size={'md'} weight={'bold'}>Grocery(Food)</Text>
                    <Text size={'sm'}>Meat (Beef), Pasta, Pasta Sauce</Text>
                    <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
                        <Badge text="In Progress"/>
                    </div>
                    <Divider/>
                </Vertical>

                <VerticalSpacer/>
                <Vertical spacing={8}>
                    <Text size={'md'} weight={'bold'}>Cleaning</Text>
                    <Text size={'sm'}>Toilet Paper, Others...etc</Text>
                    <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
                        <Badge text="Ready for collection"/>
                    </div>
                    <Divider/>
                </Vertical>

                <VerticalSpacer/>
                <Vertical spacing={8}>
                    <Text size={'md'} weight={'bold'}>Cleaning</Text>
                    <Text size={'sm'}>Toilet Paper, Others...etc</Text>
                    <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
                        <Badge text="Ready for collection"/>
                    </div>
                    <Divider/>
                </Vertical>

                <VerticalSpacer/>
                <Vertical spacing={8}>
                    <Text size={'md'} weight={'bold'}>Cleaning</Text>
                    <Text size={'sm'}>Toilet Paper, Others...etc</Text>
                    <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
                        <Badge text="Ready for collection"/>
                    </div>
                    <Divider/>
                </Vertical>
                <VerticalSpacer/>
            </div>

            <Sticky bottom={20}>
                <VerticalSpacer/>
                <Button text="Make a request" color={'red'}/>
            </Sticky>

        </>;
    }
}
