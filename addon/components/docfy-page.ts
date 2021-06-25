import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

interface DocfyPageArgs {}

export default class DocfyPage extends Component<DocfyPageArgs> {
  @tracked currentHeadingId?: string;

  setCurrentHeadingId = (id: string): void => {
    this.currentHeadingId = id;
  };
}
