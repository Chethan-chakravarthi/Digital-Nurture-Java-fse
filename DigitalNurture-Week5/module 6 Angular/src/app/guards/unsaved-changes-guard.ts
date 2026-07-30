import { CanDeactivateFn } from '@angular/router';
import { EditProfile } from '../components/edit-profile/edit-profile';

export const unsavedChangesGuard: CanDeactivateFn<EditProfile> = (component) => {

  if (component.hasUnsavedChanges) {

    return confirm('You have unsaved changes. Leave this page?');

  }

  return true;
};
