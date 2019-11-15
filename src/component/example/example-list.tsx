import React from "react";
import { Dictionary } from "lodash";
import { ExampleEntity } from "../../model/example-entity";

export interface ExampleListProps {
    data: Dictionary<ExampleEntity>,
    loading: boolean
}

export const ExampleList: React.FC<ExampleListProps> = ({ data, loading }) => (
    loading ?
        <div className="has-text-centered"><button className="button is-loading">Loading</button></div> :
        <div>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.values(data).map(({ id, name, description }) => <tr key={id}>
                            <td>{name}</td>
                            <td>{description}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
);