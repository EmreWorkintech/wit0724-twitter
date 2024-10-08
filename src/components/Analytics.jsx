/* eslint-disable react/prop-types */
function Analytics({ data }) {
  return (
    <div className="flex justify-between mt-4 text-slate-500">
      <span>
        <i className="fa-regular fa-message mr-4"></i>
        {data.comment}
      </span>
      <span>
        <i className="fa-solid fa-arrows-rotate mr-4"></i>
        {data.reTweet}
      </span>
      <span>
        <i className="fa-regular fa-heart mr-4"></i>
        {data.like}
      </span>
      <span>
        <i className="fa-solid fa-upload"></i>
      </span>
      <span>
        <i className="fa-solid fa-chart-simple"></i>
      </span>
    </div>
  );
}

export default Analytics;
