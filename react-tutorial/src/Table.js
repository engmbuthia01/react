import React, { Component } from 'react'

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    )
}

const TableBody = () => {
    return <tbody />
}

class Table extends Component {
    render() {
        const { chatacterData } = this.props

        return (
            <table>
                <TableHeader />
                <TableBody characterData={characters} />
            </table>
        )
    }
}

export default Table