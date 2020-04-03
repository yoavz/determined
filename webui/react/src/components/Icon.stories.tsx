import React from 'react';

import Icon from './Icon';

export default {
  component: Icon,
  title: 'Icon',
};

export const Default = (): React.ReactNode => <Icon />;

export const SmallIcon = (): React.ReactNode => <Icon size="small" />;
export const MediumIcon = (): React.ReactNode => <Icon size="medium" />;

export const DaiLogo = (): React.ReactNode => <Icon name="dai-logo" />;
export const Cluster = (): React.ReactNode => <Icon name="cluster" />;
export const Collapse = (): React.ReactNode => <Icon name="collapse" />;
export const Command = (): React.ReactNode => <Icon name="command" />;
export const Expand = (): React.ReactNode => <Icon name="expand" />;
export const Experiment = (): React.ReactNode => <Icon name="experiment" />;
export const Grid = (): React.ReactNode => <Icon name="grid" />;
export const List = (): React.ReactNode => <Icon name="list" />;
export const Notebook = (): React.ReactNode => <Icon name="notebook" />;
export const OverflowHorizontal = (): React.ReactNode => <Icon name="overflow-horizontal" />;
export const OverflowVertical = (): React.ReactNode => <Icon name="overflow-vertical" />;
export const Shell = (): React.ReactNode => <Icon name="shell" />;
export const Star = (): React.ReactNode => <Icon name="star" />;
export const TensorBoard = (): React.ReactNode => <Icon name="tensorboard" />;
export const TensorFlow = (): React.ReactNode => <Icon name="tensorflow" />;