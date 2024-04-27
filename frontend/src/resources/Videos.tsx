import { Datagrid, DateField, List, NumberField, ReferenceField, TextField, ImageField, UrlField } from 'react-admin';

export const VideoList = () => (
    <List>
        <Datagrid rowClick="edit">
						<ImageField source="thumbnail" />
            <TextField source="title" />
            {/* <TextField source="description" /> */}
						<UrlField source="id" />
            <DateField source="publishedAt" />
            {/* <ReferenceField source="categoryId" reference="categories" /> */}
            <ReferenceField source="channelId" reference="channels" />
            <NumberField source="viewCount" />
            <NumberField source="likeCount" />
            <NumberField source="commentCount" />
            <TextField source="topicDetails" />
        </Datagrid>
    </List>

);