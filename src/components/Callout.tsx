interface CalloutProps {
  children: React.ReactNode;
  bg?: string;
}

const Callout = ({ children, bg = "bg-green-200" }: CalloutProps) => {
  return (
    <div className={`p-4 rounded-lg ${bg}`}>
        { children }
    </div>
  )
};

export default Callout