import React from 'react';
import {List, message} from 'antd'
import {Book} from './Book'
import "../css/bookDetail.css"
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
export class BookList extends React.Component{

    constructor(props) {
        super(props);
        this.state = {books:[],
            searchbooks:[]
        }
    }

    componentDidMount() {

            fetch("http://localhost:8080/getbooks")
                .then(response => response.json())
                .then(data => {
                    this.setState({books:data})
                    this.setState({searchbooks:data})
                }).catch(function (ex) {
                console.log('parsing failed', ex)
            })

    }

    render() {
        const { Search } = Input;
        const onSearch = (value) => {

            const filteredBooks = this.state.books.filter(
                book => book.name.toLowerCase().includes(value.toLowerCase())
            )
            this.setState({searchbooks:filteredBooks});

        }

        return (
            <div>
                <div className="searchbar">
                    <Search placeholder="input search text" onSearch={onSearch} enterButton />
                </div>
            <List className={"bookitem"}
                grid={{gutter: 10, column: 4}}
                dataSource={this.state.searchbooks}
                pagination={{
                    onChange: page => {
                        console.log(page);
                    },
                    pageSize: 16,
                }}

                renderItem={item => (
                    <List.Item >
                        <Book info={item} />
                    </List.Item>
                )}
            />
            </div>
        );
    }

}





