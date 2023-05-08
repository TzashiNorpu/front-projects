import {useAccess,Access } from "@umijs/max";

 
const PageA = (props) => {
  const { foo } = props;
  const access = useAccess();
  <>
    <Access
      accessible={access.canReadFoo}
      fallback={<div>Can not read foo content.</div>}
    >
      Foo content.
    </Access>

    <Access
      accessible={access.canUpdateFoo}
      fallback={<div>Can not update foo.</div>}
    >
      Update foo.
    </Access>
    
    <Access
      accessible={access.canDeleteFoo(foo)}
      fallback={<div>Can not delete foo.</div>}
    >
      Delete foo.
    </Access>
    </>
};
 
export default PageA;