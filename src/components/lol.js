import React from "react"
import { graphql, useStaticQuery } from "gatsby"



const Issues = () => {

    // Querying for issues from github
    const data = useStaticQuery(graphql`
        query {
            allGithubIssues {
            edges {
                node {
                title
                url
                author {
                    login
                }
                }
            }
            }
        }
    `)

    return (
        <div>
            <ol>
                {data.allGithubIssues.edges.map(edge => {
                    return (
                    <a href={edge.node.url} target="_blank" rel="noopener noreferrer">
                            <p>{edge.node.title}</p>
                            <p><em>Author: {edge.node.author.login}</em></p>
                        </a>
                    )
                })}
            </ol>
        </div>
    )
}

export default Issues