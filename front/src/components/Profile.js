import { Button, Form, Input, InputNumber, Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import "../css/bookDetail.css"
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};
/* eslint-enable no-template-curly-in-string */

const onFinish = (values) => {
    console.log(values);
};
const Profile = () => (
    <div>
        <h1 className={"title"}>My Profile</h1>
    <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        style={{
            maxWidth: 600,
        }}
        validateMessages={validateMessages}
    >
        <Form.Item
            name={['user', 'name']}
            label="Name"
            rules={[
                {
                    required: true,
                },
            ]}
        >
            <Input />
        </Form.Item>
        <Form.Item
            name={['user', 'email']}
            label="Email"
            rules={[
                {
                    type: 'email',
                },
            ]}
        >
            <Input />
        </Form.Item>
        <Form.Item
            name={['user', 'age']}
            label="Age"
            rules={[
                {
                    type: 'number',
                    min: 0,
                    max: 99,
                },
            ]}
        >
            <InputNumber />
        </Form.Item>
        <Form.Item name={['user', 'website']} label="Website">
            <Input />
        </Form.Item>
        <Form.Item label="Icon" valuePropName="fileList">
            <Upload action="/upload.do" listType="picture-card">
                <div>
                    <PlusOutlined />
                    <div
                        style={{
                            marginTop: 8,
                        }}
                    >
                        Upload
                    </div>
                </div>
            </Upload>
        </Form.Item>
        <Form.Item name={['user', 'introduction']} label="Introduction">
            <Input.TextArea />
        </Form.Item>
        <Form.Item
            wrapperCol={{
                ...layout.wrapperCol,
                offset: 8,
            }}
        >
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
        </Form.Item>
    </Form>
        </div>
);
export default Profile;


// import {Form} from "react-router-dom";
//
// export default function Profile(){
//
//
//     return (
//         <Form method="post" id="contact-form">
//             <p>
//                 <span>Name</span>
//                 <input
//                     placeholder="First"
//                     aria-label="First name"
//                     type="text"
//                     name="first"
//
//                 />
//                 <input
//                     placeholder="Last"
//                     aria-label="Last name"
//                     type="text"
//                     name="last"
//
//                 />
//             </p>
//             <label>
//                 <span>Twitter</span>
//                 <input
//                     type="text"
//                     name="twitter"
//                     placeholder="@jack"
//
//                 />
//             </label>
//             <label>
//                 <span>Avatar URL</span>
//                 <input
//                     placeholder="https://example.com/avatar.jpg"
//                     aria-label="Avatar URL"
//                     type="text"
//                     name="avatar"
//
//                 />
//             </label>
//             <label>
//                 <span>Notes</span>
//                 <textarea
//                     name="notes"
//
//                     rows={6}
//                 />
//             </label>
//             <p>
//                 <button type="submit">Save</button>
//                 <button
//                     type="button"
//                     onClick={() => {
//                     }}
//                 >Cancel</button>
//             </p>
//         </Form>
//
//     )
// }