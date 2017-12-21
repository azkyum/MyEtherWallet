import React from 'react';
import translate from 'translations';
import { WalletType } from '../GenerateWallet';
import { NewTabLink } from 'components/ui';
import './WalletTypes.scss';

interface Props {
  onSelect(type: WalletType): void;
}

export default class WalletTypes extends React.Component<Props, {}> {
  private typeInfo = {
    [WalletType.Keystore]: {
      name: 'x_Keystore2',
      bullets: [
        'An encrypted JSON file, protected by a password',
        'Back it up on a USB drive',
        'Cannot be written, printed, or easily transferred to mobile',
        'Compatible with Mist, Parity, Geth',
        'Provides a single address for sending and receiving'
      ]
    },
    [WalletType.Mnemonic]: {
      name: 'x_Mnemonic',
      bullets: [
        'A 12-word private seed phrase',
        'Back it up on paper or USB drive',
        'Can be written, printed, and easily typed on mobile, too',
        'Compatible with MetaMask, Jaxx, imToken, and more',
        'Provides unlimited addresses for sending and receiving'
      ]
    }
  };

  public render() {
    return (
      <div className="WalletTypes Tab-content-pane">
        <h1 className="WalletTypes-title">{translate('NAV_GenerateWallet')}</h1>
        <p className="WalletTypes-subtitle">
          Managing your own keys can be risky and a single mistake can lead to irrecoverable loss.
          If you are new to cryptocurrencies, we strongly recommend using MetaMask, or purchasing a
          Ledger or TREZOR hardware wallet.{' '}
          <NewTabLink href="https://myetherwallet.github.io/knowledge-base/private-keys-passwords/difference-beween-private-key-and-keystore-file.html">
            Learn more about different wallet types & staying secure.
          </NewTabLink>
        </p>

        <div className="WalletTypes-types row">
          <div className="col-md-1" />
          {Object.keys(this.typeInfo).map(type => (
            <div key={type} className="WalletType col-md-5">
              <h2 className="WalletType-title">{translate(this.typeInfo[type].name)}</h2>
              <ul className="WalletType-features">
                {this.typeInfo[type].bullets.map(bullet => (
                  <li key={bullet} className="WalletType-features-feature">
                    {translate(bullet)}
                  </li>
                ))}
              </ul>
              <div className="WalletType-select">
                <button
                  className="WalletType-select-btn btn btn-primary btn-block"
                  onClick={this.handleSelect.bind(this, type)}
                >
                  Generate a {translate(this.typeInfo[type].name)}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  private handleSelect(type: WalletType) {
    this.props.onSelect(type);
  }
}