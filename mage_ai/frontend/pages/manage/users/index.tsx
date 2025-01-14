import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';

import Button from '@oracle/elements/Button';
import Headline from '@oracle/elements/Headline';
import PrivateRoute from '@components/shared/PrivateRoute';
import Spacing from '@oracle/elements/Spacing';
import Table from '@components/shared/Table';
import Text from '@oracle/elements/Text';
import UserType from '@interfaces/UserType';
import WorkspacesDashboard from '@components/workspaces/Dashboard';
import api from '@api';
import usePrevious from '@utils/usePrevious';
import { Add } from '@oracle/icons';
import { PADDING_UNITS } from '@oracle/styles/units/spacing';
import { WorkspacesPageNameEnum } from '@components/workspaces/Dashboard/constants';
import { getUser } from '@utils/session';
import { goToWithQuery } from '@utils/routing';
import { isEqual } from '@utils/hash';
import { queryFromUrl } from '@utils/url';

function UsersListPage() {
  const router = useRouter();
  const { id: currentUserID, owner: isOwner } = getUser() || {};
  const [query, setQuery] = useState<{
    add_new_user: boolean;
    user_id: number;
  }>(null);

  const { data, mutate: fetchUsers } = api.users.list({}, {
    revalidateOnFocus: false,
  });
  const users = useMemo(
    () => data?.users || [],
    [data?.users],
  );
  const { data: dataUser, mutate: fetchUser } = api.users.detail(query?.user_id, {}, {
    revalidateOnFocus: false,
  });
  const user = dataUser?.user;

  const q = queryFromUrl();
  const qPrev = usePrevious(q);
  useEffect(() => {
    const {
      add_new_user: addNewUser,
      user_id: userID,
    } = q;

    if (!isEqual(q, qPrev)) {
      const newQuery = { ...qPrev, ...q };

      if (userID) {
        newQuery.user_id = userID;
      } else {
        delete newQuery.user_id;
      }

      if (addNewUser) {
        newQuery.add_new_user = addNewUser;
      } else {
        delete newQuery.add_new_user;
      }

      setQuery(newQuery);
    }
  }, [
    q,
    qPrev,
  ]);

  return (
    <WorkspacesDashboard
      pageName={WorkspacesPageNameEnum.USERS}
    >
      {isOwner &&
        <Spacing p={PADDING_UNITS}>
          <Button
            beforeIcon={<Add />}
            onClick={() => goToWithQuery({
              add_new_user: 1,
              user_id: null,
            })}
            primary
          >
            Add new user
          </Button>
        </Spacing>
      }

      <Spacing p={PADDING_UNITS}>
        <Headline>
          Users
        </Headline>
      </Spacing>
      <Table
        columnFlex={[1, 1, 1]}
        columns={[
          {
            uuid: 'Username',
          },
          {
            uuid: 'Email',
          },
          {
            uuid: 'Role',
          },
        ]}
        isSelectedRow={(rowIndex: number) => users[rowIndex]?.id === user?.id}
        onClickRow={(rowIndex: number) => {
          const rowUserID = users[rowIndex]?.id;

          if (rowUserID === currentUserID) {
            router.push('/settings/account/profile');
          } else {
            router.push('/manage/users/[user]', `/manage/users/${rowUserID}`);
          }
        }}
        rows={users.map(({
          email,
          roles_display,
          roles_new,
          username,
        }: UserType) => [
          <Text bold key="username">
            {username}
          </Text>,
          <Text default key="email">
            {email}
          </Text>,
          <Text default key="roles">
            {roles_new && roles_new[0] ? roles_new[0].name : roles_display}
          </Text>,
        ])}
        uuid="pipeline-runs"
      />
    </WorkspacesDashboard>
  );
}

UsersListPage.getInitialProps = async () => ({});

export default PrivateRoute(UsersListPage);
