import { Datagrid, DateField, List, NumberField, TextField, ImageField } from 'react-admin';

export const ChannelList = () => (
    <List>
        <Datagrid rowClick="edit">
					<ImageField source="thumbnail" />
            <TextField source="title" />
            {/* <TextField source="description" /> */}
            <TextField source="customUrl" />
            <DateField source="publishedAt" />
            <TextField source="country" />
            <NumberField source="viewCount" />
            <NumberField source="subscriberCount" />
            <NumberField source="videoCount" />
            {/* <TextField source="topicDetails" /> */}
            {/* <TextField source="id" /> */}
        </Datagrid>
    </List>
);