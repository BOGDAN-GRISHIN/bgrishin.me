import { css } from 'cssed/macro'

const styles = css`
  .info {
    margin-top: 40px;
    margin-left: 10px;
  }

  .title {
    font-weight: 500;
    font-size: 25px;
    margin-bottom: 15px;
  }

  .items {
    margin-left: 55px;
  }

  .items div {
    font-size: 18px;
    font-weight: 400;
    margin: 3px 0;
  }

  .items div span {
    font-weight: 500;
  }

  @media screen and (max-width: 900px) {
    .items {
      margin-left: 16px;
    }
  }
`

const Info = () => (
  <div className={styles.info}>
    <h2 className={styles.title}>📝️&nbsp;Short info</h2>
    <div className={styles.items}>
      <div>
        🌎 &nbsp;Location: <span>Flexible</span>
      </div>
      <div>
        ⏳ &nbsp;Years of experience:{' '}
        <span>
          {new Date(Date.now() - +new Date(2021, 12, 1)).getFullYear() - 1970}{' '}
          year(s) of commercial experience
        </span>
      </div>
      <div>
        🇬🇧 &nbsp;Languages: <span>English, Russian, Ukrainian</span>
      </div>
      <div>
        🐣 &nbsp;Birthday: <span>2007, 5 of May</span>
      </div>
    </div>
  </div>
)

export default Info
