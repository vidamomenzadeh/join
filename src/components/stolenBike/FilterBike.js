import React  from 'react';
import { Input, DatePicker, Button, Form } from 'antd';

function BikeFilter(props) {
    const {applyStolenBikeFilter} = props;
    const { getFieldDecorator, validateFields } = props.form;

    function handleSubmit(e){
        e.preventDefault();
        validateFields((err, values) => {
            if (!err) {
                applyStolenBikeFilter(values);
            }
        });
    }

    return(

        <Form onSubmit={handleSubmit} className="bike-filter-form" layout="inline">
            <Form.Item>
            {getFieldDecorator('title', {
               rules: [{ required: true, message: 'Please input your username!' }],
            })(
               <Input placeholder="Search Case Description..." />
            )}
            </Form.Item>

            <Form.Item>
               {getFieldDecorator('occurred_before', {
               })(
                   <DatePicker  placeholder={"From"}/>
               )}
            </Form.Item>

           <Form.Item>
               {getFieldDecorator('occurred_after', {
               })(
                   <DatePicker  placeholder={"To"}/>
               )}
           </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Find Cases
                </Button>
            </Form.Item>

        </Form>
    );
}

export const  WrappedBikeFilterForm = Form.create({ name: 'bike_filter' })(BikeFilter);