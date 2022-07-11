import { selectAllAuthors } from '../../features/authors/authorSlice'
import { useSelector } from 'react-redux'
import AuthorRow from './AuthorRow';
export default function AuthorTables() {
    const allAuthors=useSelector(selectAllAuthors);
  const authorList=allAuthors.map(author=><AuthorRow key={author.id} author={author}/>)
  return (
    <div className="row">
    <div className="col-12">
      <div className="card my-4">
        <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
          <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
            <h6 className="text-white text-capitalize ps-3">Authors table</h6>
          </div>
        </div>
        <div className="card-body px-0 pb-2">
          <div className="table-responsive p-0">
            <table className="table align-items-center mb-0">
              <thead>
                <tr>
                  <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Author</th>
                  <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Function</th>
                  <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Status</th>
                  <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Employed</th>
                  <th className="text-secondary opacity-7"></th>
                </tr>
              </thead>
              <tbody>
              {authorList}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
