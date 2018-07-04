import React from "react";
import _ from "lodash";
import Link from "pawjs/src/components/link";

export default class BlogListing extends React.Component {
  componentDidMount(){
    console.log(this.props.preLoadedData.data);
  }
  render() {
    return (
      <div className="mt-5">
        {
          _.map(this.props.preLoadedData.data, blog => {
            const id = _.get(blog, "results.id", 0);
            return (
              <div key={id} className="media">
                <div className="media-body">
                  <h5 className="mt-0">
                    <Link to={`/blog/${id}`} dangerouslySetInnerHTML={{ __html: _.get(blog, "results.username")}} />
                  </h5>
                  <p dangerouslySetInnerHTML={{ __html:_.get(blog, "results.email") }} />
                </div>
              </div>
            );
          })
        }
      </div>
    );
  }
}
