import { ClipLoader } from 'react-spinners'

type SpinnerProps = {
  loading: boolean
}

const override = {
  display: 'block',
  margin: '100px auto',
}

const Spinner = ({ loading }: SpinnerProps) => {
  return (
    <ClipLoader
      color="green"
      loading={loading}
      cssOverride={override}
      size={150}
    />
  )
}

export default Spinner
